import Inner from './Inner';
import Column from './Column';

// 实际的组件
export const widgetSet = { Inner, Column };

export const widgetList = [
    {
        name: '两列布局',
        component: 'Column',
        plots: Object.keys(Column.plots)
    }, {
        name: '内框',
        component: 'Inner',
        plots: Object.keys(Inner.plots)
    }
];