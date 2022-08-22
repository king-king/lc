import { createSlice, current } from '@reduxjs/toolkit';
import { visitVTree, insertArray, deleteArray } from '../../tools/visit';

export const counterSlice = createSlice({
    // name影响的是action.type的取值
    name: 'vtree',
    initialState: {
        value: [],
        // 当前选中的组件uuid
        curUUID: ''
    },
    reducers: {
        add: (state, action) => {
            const {
                melon, type, widgetUUID, position, parentUUID, targetPlot
            } = action.payload;
            if (type === 'canvas') {
                state.value.push(melon);
            } else if (type === 'widget') {
                // 落在组件的前后
                visitVTree(state.value, (node, index, list) => {
                    if (node.uuid === widgetUUID) {
                        insertArray(list, position === 'before' ? index : index + 1, melon);
                        return true;
                    }
                    return false;
                });
            } else {
                // 槽位
                // 如果有父元素就添加到父元素节点上
                visitVTree(state.value, node => {
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
            console.log(current(state.value));
        },
        delte: (state, action) => {
            if (state.curUUID === action.payload.uuid) {
                state.curUUID = undefined;
            }
            // 处理删除
            visitVTree(state.value, (node, index, list) => {
                if (node.uuid === action.payload.uuid) {
                    deleteArray(list, index);
                    return true;
                }
                return false;
            });
        },
        edit: (state, action) => {
        },
        setCurrentWidgetUUID: (state, action) => {
            state.curUUID = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    add, delte, edit, setCurrentWidgetUUID
} = counterSlice.actions;

export default counterSlice.reducer;
