import { createSlice } from '@reduxjs/toolkit';
import { visitTree } from '../../tools/visit';

export const counterSlice = createSlice({
    // name影响的是action.type的取值
    name: 'vtree',
    initialState: {
        value: []
    },
    reducers: {
        add: (state, action) => {
            const parentUUID = action.payload.parentUUID;
            if (parentUUID) {
                // 如果有父元素就添加到父元素节点上
                visitTree(state.value, node => {
                    if (node.uuid === parentUUID) {
                        if (node?.children?.length) {
                            node.children.push(action.payload);
                        } else {
                            node.children = [action.payload];
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
