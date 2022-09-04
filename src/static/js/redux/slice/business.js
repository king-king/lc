/*
 * Created by king at 2022-8-23 17:51:45
 * Copyright (c) 2022
 */
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { url } from '../../config/api';

export const pageSlice = createSlice({
    // name影响的是action.type的取值
    name: 'business',
    initialState: {
        // 存放所有的业务线
        businessList: [],
        // 存放某个业务线的所有页面
        pageList: []
    },
    reducers: {
        updateBusinessList: (state, action) => {
            state.businessList = action.payload;
        },
        updateBusinessPageList: (state, action) => {
            state.pageList = action.payload;
        }
    }
});

const {
    updateBusinessList, updateBusinessPageList
} = pageSlice.actions;

export const fetchBusinessList = () => async dispatch => {
    axios.get(url.business.list, {}).then(res => {
        dispatch(updateBusinessList(res.data.data));
    });
};

export const fetchBusinessPageList = () => async dispatch => {
    axios.get(url.business.pageList, {}).then(res => {
        dispatch(updateBusinessPageList(res.data.data));
    });
};

export default pageSlice.reducer;
