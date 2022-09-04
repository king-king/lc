import Inner from './component/Inner';
import Column from './component/Column';
import Card from './component/Card';
import defaultIcon from './image/default-icon.svg';
import datepicker from './image/datepicker.svg';
import grid from './image/grid.svg';
import input from './image/input.svg';
import section from './image/section.svg';
import select from './image/select.svg';
import table from './image/table.svg';
import text from './image/text.svg';
import title from './image/title.svg';

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
        icon: grid
    }),
    widget({
        name: '内框',
        component: 'Inner',
        icon: defaultIcon
    }),
    widget({
        name: '区域',
        component: 'Card',
        icon: section
    })
];