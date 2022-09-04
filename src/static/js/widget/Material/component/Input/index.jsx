import React from 'react';
import { Input } from 'antd';
import './style.scss';

function ProInput({ }) {
    return (
        <Input />
    );
}

ProInput.propTypes = {
};
ProInput.defaultProps = {
};
export default {
    component: React.memo(ProInput),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
