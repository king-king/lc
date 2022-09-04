import Inner from './component/Inner';
import Column from './component/Column';
import Card from './component/Card';

// 实际的组件
export const widgetSet = { Inner, Column, Card };

const widget = arg => ({
    ...arg,
    props: {},
    plots: Object.keys(widgetSet[arg.component].plots)
});

export const widgetList = [
    widget({
        name: '两列布局',
        component: 'Column',
        icon: ''
    }),
    widget({
        name: '内框',
        component: 'Inner'
    }),
    widget({
        name: '卡片',
        component: 'Card'
    })
];
