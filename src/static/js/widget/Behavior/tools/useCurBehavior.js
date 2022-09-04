/*
 * Created by king at 2022-9-2 14:45:51
 * Copyright (c) 2022
 */
import { useSelector } from 'react-redux';

// 获取当前被编辑的动作
export default () => {
    const list = useSelector(state => state.behavior.list);
    const curBehaviorUUID = useSelector(state => state.behavior.curBehaviorUUID);
    const curBahavior = list.find(item => item.uuid === curBehaviorUUID);
    return curBahavior;
};