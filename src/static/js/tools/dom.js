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

// 获取到路径树上第一个组件
export const getWidgetUUID = target => {
    let result;
    bubble(target, dom => {
        if (dom.dataset.id === 'lc-work-ground-component-canvas') {
            return true;
        }
        if (dom.dataset.lcWidgetUuid) {
            result = dom.dataset.lcWidgetUuid;
            return true;
        }
        return false;
    });
    return result;
};
