import React from 'react';
import { blockPlot } from '../../../../tools/widget';
import icon from '../../image/section.svg';
import './style.scss';
import { widgetKind } from '../../../../config';

function Section({ children }) {
    return (
        <div className='section-com'>{children}</div>
    );
}

Section.propTypes = {
};
Section.defaultProps = {
};
export default {
    name: '区域',
    icon,
    type: widgetKind.layout.type,
    component: React.memo(Section),
    // 声明可以触发的事件
    event: [{
        name: '点击',
        props: 'onClick'
    }],
    plots: {
        children: blockPlot
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
