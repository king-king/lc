/*
 * Created by king at 2022-7-23 15:37:14
 * Copyright (c) 2022
 */

import { v4 as uuidv4 } from 'uuid';

export const melon = ({
    x, y, widget, ...arg
}) => {
    // 生成一个虚拟节点
    console.log(arg);
    const uuid = uuidv4();
    return {
        x, y, widget, uuid, ...arg
    };
};
