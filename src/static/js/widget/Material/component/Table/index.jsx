import React from 'react';
import { Table } from 'antd';
import './style.scss';

function ProTable({ }) {
    return (
        <Table />
    );
}

ProTable.propTypes = {
};
ProTable.defaultProps = {
};
export default {
    component: React.memo(ProTable),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
