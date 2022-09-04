import React from 'react';
import { Table } from 'antd';
import './style.scss';
import icon from '../../image/table.svg';
import { widgetKind } from '../../../../config';

function ProTable() {
    return (
        <Table />
    );
}

ProTable.propTypes = {
};
ProTable.defaultProps = {
};
export default {
    name: '表格',
    icon,
    type: widgetKind.visualize.type,
    component: React.memo(ProTable),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
