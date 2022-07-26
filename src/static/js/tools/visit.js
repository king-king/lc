/*
 * Created by king at 2022-7-26 22:25:48
 * Copyright (c) 2022
 */

export const visitTree = (tree, func) => {
    tree.forEach(node => {
        if (!func(node)) {
            node?.children?.length && visitTree(node.children, func);
        }
    });
};
