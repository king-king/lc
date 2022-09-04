import React from 'react';
import { DatePicker } from 'antd';
import './style.scss';

function ProDatePicker({ }) {
    return (
        <DatePicker />
    );
}

ProDatePicker.propTypes = {
};
ProDatePicker.defaultProps = {
};
export default {
    component: React.memo(ProDatePicker),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
