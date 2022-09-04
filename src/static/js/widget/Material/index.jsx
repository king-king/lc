/*
 * Created by king at 2022-9-4 15:30:11
 * Copyright (c) 2022
 */

// 组件
import Inner from './component/Inner';
import Column from './component/Column';
import Section from './component/Section';
import Table from './component/Table';
import Input from './component/Input';
import Select from './component/Select';
import DatePicker from './component/DatePicker';
// 图标
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
export const widgetSet = {
    Inner,
    Column,
    Section,
    Table,
    // 录入
    DatePicker,
    Input,
    Select
};

const widget = arg => ({
    ...arg,
    props: {},
    plots: Object.keys(widgetSet[arg.component].plots)
});

export const widgetList = [
    {
        name: '布局',
        type: 'layout',
        children: [
            widget({
                name: '区域',
                component: 'Section',
                icon: section
            }),
            widget({
                name: '两列布局',
                component: 'Column',
                icon: grid
            })
        ]
    },
    {
        name: '数据录入',
        type: 'input',
        children: [
            widget({
                name: '输入框',
                component: 'Input',
                icon: input
            }),
            widget({
                name: '下拉框',
                component: 'Select',
                icon: select
            }),
            widget({
                name: '下拉框',
                component: 'DatePicker',
                icon: datepicker
            })
        ]
    },
    {
        name: '数据展示',
        type: 'visualize',
        children: [
            widget({
                name: '表格',
                component: 'Table',
                icon: table
            })]
    }
];
