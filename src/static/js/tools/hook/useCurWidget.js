/*
 * Created by king at 2022-9-4 23:18:02
 * Copyright (c) 2022
 */
// 获取当前选中的组件（如果有的话）

import { useSelector } from 'react-redux';
import { visitVTree } from '../visit';

export default () => {
    const curWidgetUUID = useSelector(state => state.vtree.curWidgetUUID);
    const vtree = useSelector(state => state.vtree.value);
    let widget;
    visitVTree(vtree, node => {
        if (node.uuid === curWidgetUUID) {
            widget = node;
        }
    });
    return widget;
};
