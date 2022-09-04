/*
 * Created by king at 2022-9-4 23:18:02
 * Copyright (c) 2022
 */
// 获取当前选中的组件（如果有的话）

import { useSelector } from 'react-redux';
import { visitVTree } from '../visit';

export default () => {
    const curUUID = useSelector(state => state.vtree.curUUID);
    const vtree = useSelector(state => state.vtree.value);
    let widget;
    visitVTree(vtree, node => {
        if (node.uuid === curUUID) {
            widget = node;
        }
    });
    return widget;
};
