/*
 * Created by king at 2022-8-23 17:51:45
 * Copyright (c) 2022
 */
import axios from 'axios';
import { createSlice, current } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
    // name影响的是action.type的取值
    name: 'page',
    initialState: {
        // 存放所有的页面
        list: []
    },
    reducers: {
        updateList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const {
    updateList
} = pageSlice.actions;

export const fetchPage = () => async dispatch => {
    axios.get('/api/page/manage/list', {}).then(res => {
        dispatch(updateList(res.data.data));
    });
};

export default pageSlice.reducer;
