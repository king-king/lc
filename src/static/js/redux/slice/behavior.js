/*
 * Created by king at 2022-8-23 17:51:45
 * Copyright (c) 2022
 */

// 存放动作的数据
import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

export const behaviorSlice = createSlice({
    // name影响的是action.type的取值
    name: 'behavior',
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
                id: `${action.payload.id}-${state.list.length}`,
                name: `${action.payload.name}-${state.list.length}`,
                uuid
            });
        },
        dele: (state, action) => {
            state.list = state.list.filter(item => item.uuid !== action.payload.uuid);
            if (action.payload.uuid === state.curBehaviorUUID) {
                state.curBehaviorUUID = undefined;
            }
        },
        edit: (state, action) => {
            state.list.forEach(item => {
                if (item.uuid === state.curBehaviorUUID) {
                    item[action.payload.propsName] = action.payload.propsValue;
                }
            });
        },
        setCurrentBehaviorUUID: (state, action) => {
            state.curBehaviorUUID = action.payload.uuid;
        }
    }
});

export const {
    add, dele, edit, setCurrentBehaviorUUID
} = behaviorSlice.actions;

export default behaviorSlice.reducer;
