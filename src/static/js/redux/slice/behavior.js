/*
 * Created by king at 2022-8-23 17:51:45
 * Copyright (c) 2022
 */

// 存放动作的数据
import { v4 as uuidv4 } from 'uuid';
import { createSlice, current } from '@reduxjs/toolkit';

export const apiSlice = createSlice({
    // name影响的是action.type的取值
    name: 'api',
    initialState: {
        // 存放所有的api
        list: [],
        // 当前列表选中的api的uuid
        curBehaviorUUID: ''
    },
    reducers: {
        add: (state, action) => {
            const uuid = uuidv4();
            state.list.push({
                ...action.payload,
                name: `${action.payload.name}-${state.list.length}`,
                uuid
            });
        },
        dele: (state, action) => {
            state.list = state.list.filter(item => item.uuid !== action.payload.uuid);
        },
        edit: (state, action) => {
        },
        setCurrentBehaviorUUID: (state, action) => {
            state.curBehaviorUUID = action.payload.uuid;
        }
    }
});

export const {
    add, dele, edit, setCurrentBehaviorUUID
} = apiSlice.actions;

export default apiSlice.reducer;
