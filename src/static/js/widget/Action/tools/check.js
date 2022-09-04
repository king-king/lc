/*
 * Created by king at 2022-8-29 23:03:41
 * Copyright (c) 2022
 */

export const validRepeat = (key, name) => (value, list, curActionUUID) => {
    // 行动的名称不能重复
    let result;
    if (value.length === 0) {
        result = `${name}不能为空`;
    } else {
        list.forEach(item => {
            if (item.uuid !== curActionUUID) {
                if (item[key] === value) {
                    result = `${name}不能重复`;
                }
            }
        });
    }
    return result;
};

export const validName = validRepeat('name', '名称');
export const validId = validRepeat('id', 'id');
