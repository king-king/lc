import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import { widgetKind } from '../../config';
import { visitVTree, insertArray, deleteArray } from '../../tools/visit';

export const counterSlice = createSlice({
    // name影响的是action.type的取值
    name: 'vtree',
    initialState: {
        // 组件树
        widgetTree: [],
        // 当前选中的组件uuid
        curWidgetUUID: '',
        // 存放变量，输入组件产生的以及接口请求返回的，都存放在这里
        varList: [],
        actionList: [],
        curActionUUID: ''
    },
    reducers: {
        // 组件
        addWidget: (state, action) => {
            const {
                melon, type, widgetUUID, position, parentUUID, targetPlot
            } = action.payload;
            if (melon.type === widgetKind.dataEntry.type) {
                // 如果是数据输入型，则需要添加$var属性，以便可以将组件的onchange与状态值关联起来
                melon.$var = uuidv4();
                state.varList.push({
                    uuid: melon.$var,
                    type: 'widgetValue',
                    desc: `${melon.widget.name}状态`
                });
            }
            if (type === 'canvas') {
                state.widgetTree.push(melon);
            } else if (type === 'widget') {
                // 落在组件的前后
                visitVTree(state.widgetTree, (node, index, list) => {
                    if (node.uuid === widgetUUID) {
                        insertArray(list, position === 'before' ? index : index + 1, melon);
                        return true;
                    }
                    return false;
                });
            } else {
                // 槽位
                // 如果有父元素就添加到父元素节点上
                visitVTree(state.widgetTree, node => {
                    if (node.uuid === parentUUID) {
                        if (node?.[targetPlot]?.length) {
                            node[targetPlot].push(melon);
                        } else {
                            node[targetPlot] = [melon];
                        }
                        return true;
                    }
                    return false;
                });
            }
        },
        deleteWidget: (state, action) => {
            if (state.curWidgetUUID === action.payload.uuid) {
                state.curWidgetUUID = undefined;
            }
            // 处理删除
            visitVTree(state.widgetTree, (node, index, list) => {
                if (node.uuid === action.payload.uuid) {
                    // 清理变量
                    state.varList = state.varList.filter(varItem => varItem.uuid !== node.$var);
                    // 清理组件
                    deleteArray(list, index);
                    return true;
                }
                return false;
            });
        },
        editWidgetProps: (state, action) => {
            visitVTree(state.widgetTree, node => {
                if (node.uuid === state.curWidgetUUID) {
                    node.widget.props[action.payload.propsName] = action.payload.propsValue;
                    return true;
                }
                return false;
            });
        },
        setCurrentWidgetUUID: (state, action) => {
            state.curWidgetUUID = action.payload;
        },
        // 动作
        addAction: (state, action) => {
            const uuid = uuidv4();
            state.actionList.push({
                ...action.payload,
                id: `${action.payload.id}-${state.actionList.length}`,
                name: `${action.payload.name}-${state.actionList.length}`,
                uuid
            });
        },
        deleteAction: (state, action) => {
            state.actionList = state.actionList.filter(item => item.uuid !== action.payload.uuid);
            if (action.payload.uuid === state.curActionUUID) {
                state.curActionUUID = undefined;
            }
        },
        editAction: (state, action) => {
            state.actionList.forEach(item => {
                if (item.uuid === state.curActionUUID) {
                    item[action.payload.propsName] = action.payload.propsValue;
                }
            });
        },
        setCurrentActionUUID: (state, action) => {
            state.curActionUUID = action.payload.uuid;
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    addWidget, deleteWidget, editWidgetProps, setCurrentWidgetUUID,
    addAction, deleteAction, editAction, setCurrentActionUUID
} = counterSlice.actions;

export default counterSlice.reducer;
