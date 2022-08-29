/*
 * Created by king at 2022-8-24 01:24:53
 * Copyright (c) 2022
 */
import CommonApi from '../../../../widget/Behavior/component/CommonApi';
import CallApi from '../../../../widget/Behavior/component/CallApi';
import ComponentInteract from '../../../../widget/Behavior/component/ComponentInteract';
import OpenOuterPage from '../../../../widget/Behavior/component/OpenOuterPage';
import OpenInnerPage from '../../../../widget/Behavior/component/OpenInnerPage';

// 请求配置
export const addList = [
    {
        label: '请求',
        list: [{
            label: '通用接口',
            value: 'common_api',
            EditContent: CommonApi
        }]
    },
    {
        label: '动作',
        list: [{
            label: '组件交互',
            value: 'component_interact',
            EditContent: ComponentInteract
        }, {
            label: '发送请求',
            value: 'call_api',
            EditContent: CallApi
        }, {
            label: '打开外部页面',
            value: 'open_outer_page',
            EditContent: OpenOuterPage
        }, {
            label: '打开内部页面',
            value: 'open_innerer_page',
            EditContent: OpenInnerPage
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
