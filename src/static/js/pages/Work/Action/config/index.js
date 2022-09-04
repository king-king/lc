/*
 * Created by king at 2022-8-24 01:24:53
 * Copyright (c) 2022
 */
import CommonApi from '../../../../widget/Action/component/CommonApi';
import CallApi from '../../../../widget/Action/component/CallApi';
import ComponentInteract from '../../../../widget/Action/component/ComponentInteract';
import OpenOuterPage from '../../../../widget/Action/component/OpenOuterPage';
import OpenInnerPage from '../../../../widget/Action/component/OpenInnerPage';

// 请求配置
export const addList = [
    {
        label: '请求',
        list: [{
            label: '通用接口',
            value: 'common_api',
            EditContent: CommonApi.Component,
            defaultParams: CommonApi.defaultParams
        }]
    },
    {
        label: '动作',
        list: [{
            label: '组件交互',
            value: 'component_interact',
            EditContent: ComponentInteract.Component,
            defaultParams: ComponentInteract.defaultParams
        }, {
            label: '发送请求',
            value: 'call_api',
            EditContent: CallApi.Component,
            defaultParams: CallApi.defaultParams
        }, {
            label: '打开外部页面',
            value: 'open_outer_page',
            EditContent: OpenOuterPage.Component,
            defaultParams: OpenOuterPage.defaultParams
        }, {
            label: '打开内部页面',
            value: 'open_innerer_page',
            EditContent: OpenInnerPage.Component,
            defaultParams: OpenInnerPage.defaultParams
        }]
    }
];

// 动作列表表格配置
export const editTableColumns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: 100,
        render: text => text || '--'
    }, {
        title: '类型',
        dataIndex: 'typeName',
        key: 'typeName',
        width: 100,
        render: text => text || '--'
    }, {
        title: '提供者',
        dataIndex: 'provider',
        key: 'provider',
        width: 100,
        render: text => text || '--'
    }, {
        title: '消费者',
        dataIndex: 'consumer',
        key: 'consumer',
        width: 100,
        render: text => text || '--'
    }, {
        title: '操作',
        dataIndex: 'process',
        key: 'process',
        align: 'center',
        width: 100
    }
];
