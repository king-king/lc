/*
 * Created by king at 2022-8-23 17:51:45
 * Copyright (c) 2022
 */

import { createSlice, current } from '@reduxjs/toolkit';

export const apiSlice = createSlice({
    // name影响的是action.type的取值
    name: 'api',
    initialState: {
        // 存放所有的api
        list: [],
        // 当前选中的api的uuid
        curUUID: ''
    },
    reducers: {
        add: (state, action) => {
        },
        dele: (state, action) => {
        },
        edit: (state, action) => {
        },
        setCurrentApiUUID: (state, action) => {
            state.curUUID = action.payload;
        }
    }
});

export const {
    add, dele, edit, setCurrentApiUUID
} = apiSlice.actions;

export default apiSlice.reducer;
