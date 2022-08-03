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

// 给数组原地插入内容,insertIndex表示item插入后在新数组中的位置
export const insertArray = (arr, insertIndex, item) => {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
        if (i - 1 === insertIndex) {
            arr[i - 1] = item;
        }
    }
};
