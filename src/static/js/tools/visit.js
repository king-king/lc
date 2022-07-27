/*
 * Created by king at 2022-7-26 22:25:48
 * Copyright (c) 2022
 */

export const visitVTree = (tree, func) => {
    tree.forEach(node => {
        if (!func(node)) {
            // 需要遍历每一个槽位
            node?.widget?.plots?.forEach(plot => {
                node?.[plot]?.length && visitVTree(node[plot], func);
            });
        }
    });
};
