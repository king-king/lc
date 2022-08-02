/*
 * Created by king at 2022-7-23 15:37:14
 * Copyright (c) 2022
 */

import { v4 as uuidv4 } from 'uuid';

export const melon = ({
    x, y,
    // 这个widget实际上没有保存React元素，实际上保存的是组件的名称
    widget
}) => {
    // 生成一个虚拟节点
    const uuid = uuidv4();
    return {
        uuid, x, y, widget
    };
};
