import { createSlice } from '@reduxjs/toolkit';
import { visitVTree } from '../../tools/visit';

export const counterSlice = createSlice({
    // name影响的是action.type的取值
    name: 'vtree',
    initialState: {
        value: []
    },
    reducers: {
        add: (state, action) => {
            const { parentUUID, targetPlot } = action.payload;
            if (parentUUID) {
                // 如果有父元素就添加到父元素节点上
                console.log(state.value);
                visitVTree(state.value, node => {
                    if (node.uuid === parentUUID) {
                        if (node?.[targetPlot]?.length) {
                            node[targetPlot].push(action.payload);
                        } else {
                            node[targetPlot] = [action.payload];
                        }
                        return true;
                    }
                    return false;
                });
            } else {
                state.value.push(action.payload);
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
