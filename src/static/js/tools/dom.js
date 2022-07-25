export const bubble = (dom, func) => {
    let cur = dom;
    func(cur);
    while (cur.parentElement && !func(cur.parentElement)) {
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
