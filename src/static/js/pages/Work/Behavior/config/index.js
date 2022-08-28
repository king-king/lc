/*
 * Created by king at 2022-8-24 01:24:53
 * Copyright (c) 2022
 */

// 行为配置
export const behaviorList = [{
    label: '组件交互',
    value: 'component_behavior'
}, {
    label: '发送请求',
    value: 'api_behavior'
}, {
    label: '打开新页面',
    value: 'open_page_behavior'
}];

// 动作列表表格配置
export const editTableColumns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: '类型',
        dataIndex: 'type',
        key: 'type'
    }, {
        title: '提供者',
        dataIndex: 'provider',
        key: 'provider'
    }, {
        title: '消费者',
        dataIndex: 'consumer',
        key: 'consumer'
    }, {
        title: '操作',
        dataIndex: 'process',
        key: 'process',
        align: 'center'
    }
];
