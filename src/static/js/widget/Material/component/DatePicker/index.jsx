import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import './style.scss';

function ProDatePicker({ style }) {
    return (
        <DatePicker style={style} />
    );
}

ProDatePicker.propTypes = {
    style: PropTypes.object
};
ProDatePicker.defaultProps = {
    style: {
        width: 280
    }
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
