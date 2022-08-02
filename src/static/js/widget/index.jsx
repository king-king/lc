import Inner from './Inner';
import Column from './Column';
import Card from './Card';

// 实际的组件
export const widgetSet = { Inner, Column, Card };

export const widgetList = [
    {
        name: '两列布局',
        component: 'Column',
        plots: Object.keys(Column.plots)
    }, {
        name: '内框',
        component: 'Inner',
        plots: Object.keys(Inner.plots)
    }, {
        name: '卡片',
        component: 'Card',
        plots: Object.keys(Card.plots)
    }
];
