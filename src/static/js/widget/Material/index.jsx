/*
 * Created by king at 2022-9-4 15:30:11
 * Copyright (c) 2022
 */

import { widgetKind, widgetKindOrder } from '../../config';
// 组件
import Grid from './component/Grid';
import Section from './component/Section';
import Table from './component/Table';
import Input from './component/Input';
import Select from './component/Select';
import DatePicker from './component/DatePicker';
import Button from './component/Button';
import Radio from './component/Radio';
import Checkbox from './component/Checkbox';

// 实际的组件
export const widgetSet = {
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

const widget = component => ({
    ...widgetSet[component],
    editProps: undefined,
    props: {},
    plots: widgetSet[component]?.plots ? Object.keys(widgetSet[component].plots) : [],
    component
});

export const widgetList = widgetKindOrder.map(type => ({
    ...widgetKind[type],
    children: Object.keys(widgetSet).filter(key => widgetSet[key].type === type).map(widget)
}));
