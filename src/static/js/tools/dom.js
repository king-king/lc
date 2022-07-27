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
