import { createSlice, current } from '@reduxjs/toolkit';
import { visitVTree, insertArray } from '../../tools/visit';

export const counterSlice = createSlice({
    // name影响的是action.type的取值
    name: 'vtree',
    initialState: {
        value: []
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
                // console.log(current(state.value));
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
        },
        remove: state => {
        },
        edit: (state, action) => {
        },
        test: (dispatch, state) => {
            dispatch(this.add());
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    add, dele, edit, test
} = counterSlice.actions;

export default counterSlice.reducer;
