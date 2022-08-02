/*
 * Created by king at 2022-7-26 22:25:48
 * Copyright (c) 2022
 */

export const visitVTree = (tree, func) => {
    tree.forEach((node, index) => {
        if (!func(node, index, tree)) {
            // 需要遍历每一个槽位
            node?.widget?.plots?.forEach(plot => {
                node?.[plot]?.length && visitVTree(node[plot], func);
            });
        }
    });
};

// 给数组原地插入内容
export const insertArray = (arr, index, item) => {

};
