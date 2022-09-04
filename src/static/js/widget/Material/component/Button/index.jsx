import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './style.scss';

function ProButton({ children }) {
    return (
        <Button>{children}</Button>
    );
}

ProButton.propTypes = {
    children: PropTypes.any
};
ProButton.defaultProps = {
    children: '按钮'
};
export default {
    component: React.memo(ProButton),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
