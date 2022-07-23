export const bubble = (dom, func) => {
    let cur = dom;
    func(cur);
    while (cur.parentElement && !func(cur.parentElement)) {
        cur = cur.parentElement;
    }
};
