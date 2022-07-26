/*
 * Created by king at 2022-7-26 22:37:03
 * Copyright (c) 2022
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { widgetList } from '../../../widget/index';
import DomGetter from '../component/DomGetter';

export const useRenderCanvasContent = () => {
    const vtree = useSelector(state => state.vtree.value);
    const render = nodes => nodes.map(({
        x, y, uuid, widget, children
    }) => {
        const config = {
            key: uuid,
            x,
            y
        };
        const onReady = dom => {
            dom.setAttribute('data-lc-widget-uuid', uuid);
        };
        const component = widgetList[widget.component];
        let childrenDom = [];
        if (children?.length) {
            childrenDom = render(children);
        }
        return <DomGetter key={uuid} component={component} config={config} onReady={onReady}>{childrenDom}</DomGetter>;
    });
    return render(vtree);
};
