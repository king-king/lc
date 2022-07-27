import Inner from './Inner';
import Out from './Out';

// 实际的组件
export const widgetSet = { Inner, Out };

export const widgetList = [
    {
        name: '卡片',
        component: 'Out'
    }, {
        name: '内框',
        component: 'Inner'
    }
];
