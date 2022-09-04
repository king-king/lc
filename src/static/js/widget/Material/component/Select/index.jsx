import React from 'react';
import { Select } from 'antd';
import './style.scss';

function ProSelect({ }) {
    return (
        <Select />
    );
}

ProSelect.propTypes = {
};
ProSelect.defaultProps = {
};
export default {
    component: React.memo(ProSelect),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
