/*
 * Created by king at 2022-8-29 23:03:41
 * Copyright (c) 2022
 */

export const validName = (value, list, curBehaviorUUID) => {
    // 行动的名称不能重复
    let result;
    if (value.length === 0) {
        result = '名称不能为空';
    } else {
        list.forEach(item => {
            if (item.uuid !== curBehaviorUUID) {
                if (item.name === value) {
                    result = '名称不能重复';
                }
            }
        });
    }
    return result;
};
