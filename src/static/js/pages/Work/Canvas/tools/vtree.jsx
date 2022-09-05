/*
 * Created by king at 2022-7-26 22:37:03
 * Copyright (c) 2022
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { widgetSet } from '../../../../widget/Material';
import DomGetter from '../component/DomGetter';
import { setVar } from '../../../../redux/slice/vtree';

export const useRenderCanvasContent = () => {
    const vtree = useSelector(state => state.vtree.widgetTree);
    const render = nodes => nodes.map(({
        x, y, uuid, widget, ...other
    }) => {
        const config = {
            key: uuid,
            x,
            y,
            ...widget.props,
            setValue: (value, type) => { setVar({ uuid, value, type }); }
        };
        const onReady = dom => {
            dom.setAttribute('data-lc-widget-uuid', uuid);
        };
        const component = widgetSet[widget.component].component;
        const plots = widgetSet[widget.component]?.plots;
        Object.keys(plots).forEach(plot => {
            if (other[plot]?.length) {
                // 如果此处槽位已经有了内容，则填充真实的内容
                config[plot] = render(other[plot]);
            } else {
                // 如果没有内容，填充占位符
                config[plot] = plots[plot](uuid, plot);
            }
        });
        return <DomGetter key={uuid} component={component} config={config} onReady={onReady} />;
    });
    return render(vtree);
};
