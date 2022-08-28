/*
 * Created by king at 2022-8-28 22:10:18
 * Copyright (c) 2022
 */
// 这里是模拟app页面的状态管理，作为demo验证用，今后还得把这块挪出来单独成型

import { createSlice, current } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    // name影响的是action.type的取值
    name: 'app',
    initialState: {
        $$value: {},
        $$action: []
    },
    reducers: {
        action: (state, action) => {
        }

    }
});

export const { action } = appSlice.actions;

export default appSlice.reducer;
