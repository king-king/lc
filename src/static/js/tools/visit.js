/*
 * Created by king at 2022-7-26 22:25:48
 * Copyright (c) 2022
 */

export const visitVTree = (tree, func) => {
    for (let i = 0; i < tree.length; i++) {
        if (func(tree[i], i, tree)) {
            break;
        } else {
            // 需要遍历每一个槽位
            tree[i]?.widget?.plots?.forEach(plot => {
                tree[i]?.[plot]?.length && visitVTree(tree[i][plot], func);
            });
        }
    }
};

// 给数组原地插入内容，insertIndex表示item插入后在新数组中的位置
export const insertArray = (arr, insertIndex, item) => {
    if (insertIndex === arr.length) {
        arr[insertIndex] = item;
    } else {
        for (let i = arr.length; i > 0; i--) {
            arr[i] = arr[i - 1];
            if ((i - 1) === insertIndex) {
                arr[i - 1] = item;
                break;
            }
        }
    }
};

// 给数组原地删除内容deleteIndex表示被删除项的下标
export const deleteArray = (arr, deleteIndex) => {
    arr.forEach((node, index) => {
        if (index > deleteIndex) {
            arr[index - 1] = arr[index];
        }
    });
    arr.length -= 1;
};
