import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import { widgetKind, varType } from '../../config';
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
            // 处理组件的变量值
            melon.varList = [];
            let hasValueVar = false;
            if (melon.widget?.varState?.length) {
                // 如果物料声明了自己的var，则按其要求生成
                melon.widget.varState.forEach(varState => {
                    if (varState.type === 'value') {
                        hasValueVar = true;
                    }
                    const uuid = uuidv4();
                    melon.varList.push({ uuid, type: varState.type });
                    state.varList.push({
                        uuid,
                        kind: 'widgetValue',
                        value: {},
                        componentName: melon.widget.name,
                        type: varState.type,
                        desc: varState.desc
                    });
                });
            }
            if (melon.widget.type === widgetKind.dataEntry.type && !hasValueVar) {
                // 如果是数据输入型且没有添加，则需要添加$var属性，以便可以将组件的onchange与状态值关联起来
                const uuid = uuidv4();
                melon.varList.push({ uuid, type: 'value' });
                state.varList.push({
                    uuid,
                    kind: 'widgetValue',
                    value: {},
                    componentName: melon.widget.name,
                    type: varType.value.type,
                    desc: varType.value.desc
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
                    if (node.varList?.length) {
                        const varSet = {};
                        node.varList.forEach(item => {
                            varSet[item.uuid] = true;
                        });
                        state.varList = state.varList.filter(varItem => !varSet[varItem.uuid]);
                    }
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
        },
        // 变量
        setVar: (state, action) => {
            // 根据type找到uuid
            const widgetUUID = action.payload.uuid;
            const value = action.payload.value;
            const type = action.payload.type;
            let targetUUID, widget;
            visitVTree(state.widgetTree, node => {
                if (node.uuid === widgetUUID) {
                    widget = node;
                    return true;
                }
                return false;
            });
            // 寻找对应的var
            widget.varList.forEach(varItem => {
                if (varItem.type === type) {
                    targetUUID = varItem.uuid;
                }
            });
            state.varList.forEach(varItem => {
                if (varItem.uuid === targetUUID) {
                    varItem.value = { ...value };
                }
            });
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    addWidget, deleteWidget, editWidgetProps, setCurrentWidgetUUID,
    addAction, deleteAction, editAction, setCurrentActionUUID, setVar
} = counterSlice.actions;

export default counterSlice.reducer;
