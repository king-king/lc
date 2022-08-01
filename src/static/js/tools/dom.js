/*
 * Created by king at 2022-8-1 22:18:08
 * Copyright (c) 2022
 */

import {
    LC_WORK_GROUND_COMPONENT_CANVAS, DATA_LC_PLOT_KEY,
    DATA_LC_PLOT_WIDGET_UUID_KEY
} from '../config/index';

export const bubble = (dom, func) => {
    let cur = dom;
    while (cur && !func(cur)) {
        cur = cur.parentElement;
    }
};

// 判定一个dom元素是不是在canvas画布上
export const isInCavans = target => {
    let result = false;
    bubble(target, dom => {
        if (dom.dataset.id === LC_WORK_GROUND_COMPONENT_CANVAS) {
            result = true;
            return true;
        }
        return false;
    });
    return result;
};

// 必须是落在一个槽位上
export const getWidgetUUID = target => {
    let result = {};
    // {parantUUID,plot};
    bubble(target, dom => {
        if (dom.dataset.id === LC_WORK_GROUND_COMPONENT_CANVAS) {
            // 落在画布上，不需要parantUUID和plot
            return true;
        }
        if (dom.dataset[DATA_LC_PLOT_WIDGET_UUID_KEY] && dom.dataset[DATA_LC_PLOT_KEY]) {
            // 落在槽位上
            result = {
                parentUUID: dom.dataset[DATA_LC_PLOT_WIDGET_UUID_KEY],
                targetPlot: dom.dataset[DATA_LC_PLOT_KEY]
            };
            return true;
        }
        return false;
    });
    return result;
};
