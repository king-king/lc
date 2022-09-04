/*
 * Created by king at 2022-9-2 14:45:51
 * Copyright (c) 2022
 */
import { useSelector } from 'react-redux';

// 获取当前被编辑的动作
export default () => {
    const list = useSelector(state => state.vtree.actionList);
    const curActionUUID = useSelector(state => state.vtree.curActionUUID);
    const curBahavior = list.find(item => item.uuid === curActionUUID);
    return curBahavior;
};
