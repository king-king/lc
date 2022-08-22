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
export const getWidgetOrPlot = target => {
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

// export const getPlotElBoundingClientRect = target => {
//     const plot = getPlotEl(target);
//     if (plot) {
//         return plot.getBoundingClientRect();
//     }
//     return {};
// };

// 根据target查询其路径上第一个组件的相关信息，并将组件高亮
let widgetHighlight;
export const highlightDom = el => {
    widgetHighlight?.remove();
    widgetHighlight = null;
    if (el) {
        const highlight = element('div', {
            css: {
                'box-sizing': 'border-box',
                position: 'absolute',
                'background-color': 'rgba(255,0,0,0.2)'
            }
        });
        widgetHighlight = element('div', {
            className: 'widget-highlight',
            css: {
                'pointer-events': 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            },
            children: [highlight.el]
        }, document.body);
        const {
            left, top, width, height
        } = el.getBoundingClientRect();
        css(highlight.el, {
            left: `${left}px`,
            top: `${top}px`,
            width: `${width}px`,
            height: `${height}px`,
            border: '1px solid rgb(0, 115, 230)'
        });
    }
};
export const getClickWidget = target => {
    let result;
    // {parantUUID,plot};
    bubble(target, dom => {
        if (dom.dataset.id === LC_WORK_GROUND_COMPONENT_CANVAS) {
            // 落在画布上，直接终止
            return true;
        }
        if (dom.dataset[DATA_LC_WIDGET_UUID_KEY]) {
            // 落在组件上
            result = {
                uuid: dom.dataset[DATA_LC_WIDGET_UUID_KEY],
                el: dom
            };
            return true;
        }
        return false;
    });
    return result;
};

export const getPositionInfo = (clientX, clientY, left, top, width, height) => {
    const result = {
        type: '',
        position: ''
    };
    if (clientX - left < width * 0.3) {
        result.type = 'left';
        result.position = 'before';
    } else if (clientX - left > width * 0.7) {
        result.type = 'right';
        result.position = 'after';
    } else if (clientY - top < height * 0.5) {
        result.type = 'top';
        result.position = 'before';
    } else if (clientY - top > height * 0.5) {
        result.type = 'bottom';
        result.position = 'after';
    }
    return result;
};

// 移动的时候高亮影子dom，帮助更好的拖拽
export const highlightDropshadow = (dropEl, event) => {
    const targetObj = getWidgetOrPlot(event.target);
    // 获取到位置信息
    if (targetObj.el) {
        const {
            left, top, width, height
        } = targetObj.el.getBoundingClientRect();
        // 判断落点的位置
        const { clientX, clientY } = event;
        let borderKey = '';
        const borderKeyValue = '3px solid red';
        if (targetObj.type === 'widget') {
            // 如果是组件，需要判断是放在组件前还是组件后
            borderKey = `border-${getPositionInfo(clientX, clientY, left, top, width, height).type}`;
        }
        css(dropEl, {
            left: `${left}px`,
            top: `${top}px`,
            width: `${width}px`,
            height: `${height}px`,
            border: '1px solid rgb(0, 115, 230)',
            [borderKey]: borderKeyValue
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
