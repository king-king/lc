import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    // name影响的是action.type的取值
    name: 'vtree',
    initialState: {
        value: []
    },
    reducers: {
        add: (state, action) => {
            // TODO:具体的添加算法还待完善
            state.value.push(action.payload);
        },
        dele: state => {
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
