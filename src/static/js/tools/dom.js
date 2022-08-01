/*
 * Created by king at 2022-8-1 22:18:08
 * Copyright (c) 2022
 */

import {
    LC_WORK_GROUND_COMPONENT_CANVAS, DATA_LC_PLOT_KEY,
    DATA_LC_PLOT_WIDGET_UUID_KEY, DATA_LC_WIDGET_UUID_KEY
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

// 获取plot的dom元素
const getWidgetOrPlot = target => {
    const result = {
        el: undefined,
        type: '' // plot/widget
    };
    bubble(target, dom => {
        if (dom.dataset.id === 'lc-work-ground-component-canvas') {
            // 只上溯到canvas画布
            return true;
        }
        if (dom.dataset[DATA_LC_PLOT_WIDGET_UUID_KEY] && dom.dataset[DATA_LC_PLOT_KEY]) {
            // 落在槽位上
            result.el = dom;
            result.type = 'plot';
            return true;
        } if (dom.dataset[DATA_LC_WIDGET_UUID_KEY]) {
            result.el = dom;
            result.type = 'widget';
            return true;
        }
        return false;
    });
    return result;
};

// export const getPlotElBoundingClientRect = target => {
//     const plot = getPlotEl(target);
//     if (plot) {
//         return plot.getBoundingClientRect();
//     }
//     return {};
// };

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

const css = (el, style) => {
    Object.keys(style).forEach(cssKey => {
        el.style.setProperty(cssKey, style[cssKey]);
    });
};

export const element = (tag, props, parent) => {
    let el = document.createElement(tag);
    parent && parent.appendChild(el);
    Object.keys(props).forEach(key => {
        if (key === 'css') {
            css(el, props.css);
        } else if (key === 'children') {
            props[key]?.forEach(child => {
                el.appendChild(child);
            });
        } else if (key === 'className') {
            el.className = props[key];
        }
    });
    return {
        el,
        css(arg) {
            Object.keys(arg).forEach(cssKey => {
                el.style.setProperty(cssKey, arg[cssKey]);
            });
        },
        remove() {
            el.parentNode && parent.removeChild(el);
            el = undefined;
        }
    };
};

// 移动的时候高亮影子dom，帮助更好的拖拽
export const highlightDropshadow = (dropEl, event) => {
    const targetObj = getWidgetOrPlot(event.target);
    // 获取到位置信息
    if (targetObj.el) {
        const {
            left, top, width, height
        } = targetObj.el.getBoundingClientRect();
        css(dropEl, {
            left: `${left}px`,
            top: `${top}px`,
            width: `${width}px`,
            height: `${height}px`,
            border: '1px solid rgb(0, 115, 230)'
        });
    } else {
        css(dropEl, {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            border: 'none'
        });
    }
};
