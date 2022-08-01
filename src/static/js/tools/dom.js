/*
 * Created by king at 2022-7-28 12:37:12
 * Copyright (c) 2022
 */

// 操作真实dom元素

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
        if (dom.dataset.id === 'lc-work-ground-component-canvas') {
            result = true;
            return true;
        }
        return false;
    });
    return result;
};

// 获取plot的dom元素
const getPlotEl = target => {
    let result;
    bubble(target, dom => {
        if (dom.dataset.id === 'lc-work-ground-component-canvas') {
            // 只上溯到canvas画布
            return true;
        }
        if (dom.dataset.lcParentWrapperUuid && dom.dataset.lcPlot) {
            // 落在槽位上
            result = dom;
            return true;
        }
        return false;
    });
    return result;
};

export const getPlotElBoundingClientRect = target => {
    const plot = getPlotEl(target);
    if (plot) {
        return plot.getBoundingClientRect();
    }
    return {};
};

// 必须是落在一个槽位上
export const getWidgetUUID = target => {
    let result = {};
    // {parantUUID,plot};
    bubble(target, dom => {
        if (dom.dataset.id === 'lc-work-ground-component-canvas') {
            // 落在画布上，不需要parantUUID和plot
            return true;
        }
        if (dom.dataset.lcParentWrapperUuid && dom.dataset.lcPlot) {
            // 落在槽位上
            result = {
                parentUUID: dom.dataset.lcParentWrapperUuid,
                targetPlot: dom.dataset.lcPlot
            };
            return true;
        }
        return false;
    });
    return result;
};

export const element = (tag, props, parent) => {
    let el = document.createElement(tag);
    parent && parent.appendChild(el);
    Object.keys(props).forEach(key => {
        if (key === 'css') {
            Object.keys(props[key]).forEach(cssKey => {
                el.style.setProperty(cssKey, props[key][cssKey]);
            });
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
