import { createSlice } from '@reduxjs/toolkit';
import { visitVTree, insertArray, deleteArray } from '../../tools/visit';

export const counterSlice = createSlice({
    // name影响的是action.type的取值
    name: 'vtree',
    initialState: {
        widgetTree: [],
        // 当前选中的组件uuid
        curWidgetUUID: ''
    },
    reducers: {
        add: (state, action) => {
            const {
                melon, type, widgetUUID, position, parentUUID, targetPlot
            } = action.payload;
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
        dele: (state, action) => {
            if (state.curWidgetUUID === action.payload.uuid) {
                state.curWidgetUUID = undefined;
            }
            // 处理删除
            visitVTree(state.widgetTree, (node, index, list) => {
                if (node.uuid === action.payload.uuid) {
                    deleteArray(list, index);
                    return true;
                }
                return false;
            });
        },
        editProps: (state, action) => {
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
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    add, dele, editProps, setCurrentWidgetUUID
} = counterSlice.actions;

export default counterSlice.reducer;
