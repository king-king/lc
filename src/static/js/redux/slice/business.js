/*
 * Created by king at 2022-8-23 17:51:45
 * Copyright (c) 2022
 */
import axios from 'axios';
import { createSlice, current } from '@reduxjs/toolkit';
import { url } from '../../config/api';

export const pageSlice = createSlice({
    // name影响的是action.type的取值
    name: 'business',
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
    axios.get(url.business.list, {}).then(res => {
        dispatch(updateList(res.data.data));
    });
};

export default pageSlice.reducer;
