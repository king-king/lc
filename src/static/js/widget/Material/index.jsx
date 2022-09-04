/*
 * Created by king at 2022-9-4 15:30:11
 * Copyright (c) 2022
 */

import { widgetKind } from '../../config';
// 组件
import Inner from './component/Inner';
import Grid from './component/Grid';
import Section from './component/Section';
import Table from './component/Table';
import Input from './component/Input';
import Select from './component/Select';
import DatePicker from './component/DatePicker';
import Button from './component/Button';
import Radio from './component/Radio';
import Checkbox from './component/Checkbox';

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
import button from './image/button.svg';
import radio from './image/radio.svg';
import checkbox from './image/checkbox.svg';

// 实际的组件
export const widgetSet = {
    Inner,
    Grid,
    Section,
    Table,
    // 录入
    DatePicker,
    Input,
    Select,
    Radio,
    Checkbox,
    // 通用
    Button
};

const widget = arg => ({
    ...arg,
    props: {},
    plots: Object.keys(widgetSet[arg.component].plots)
});

export const widgetList = [
    {
        // 数据展示
        name: widgetKind.layout.name,
        type: widgetKind.layout.type,
        children: [
            widget({
                name: '区域',
                component: 'Section',
                icon: section
            }),
            widget({
                name: '两列布局',
                component: 'Grid',
                icon: grid
            })
        ]
    },
    {
        // 数据录入
        name: widgetKind.dataEntry.name,
        type: widgetKind.dataEntry.type,
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
                name: '日期',
                component: 'DatePicker',
                icon: datepicker
            }),
            widget({
                name: '单选框',
                component: 'Radio',
                icon: radio
            }),
            widget({
                name: '多选框',
                component: 'Checkbox',
                icon: checkbox
            })
        ]
    },
    {
        // 数据展示
        name: widgetKind.visualize.name,
        type: widgetKind.visualize.type,
        children: [
            widget({
                name: '表格',
                component: 'Table',
                icon: table
            })]
    },
    {
        // 基础
        name: widgetKind.basic.name,
        type: widgetKind.basic.type,
        children: [
            widget({
                name: '按钮',
                component: 'Button',
                icon: button
            })
        ]
    }
];
