import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import './style.scss';

function ProCheckbox({ data }) {
    return (
        <Checkbox.Group options={data} />
    );
}

ProCheckbox.propTypes = {
    data: PropTypes.array
};
ProCheckbox.defaultProps = {
    data: [{ value: '1', label: '选项1' }, { value: '2', label: '选项2' }]
};
export default {
    component: React.memo(ProCheckbox),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
