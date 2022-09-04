import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import './style.scss';
import icon from '../../image/input.svg';
import { widgetKind } from '../../../../config';

function ProInput({ style }) {
    return (
        <Input style={style} />
    );
}

ProInput.propTypes = {
    style: PropTypes.object
};
ProInput.defaultProps = {
    style: {
        width: 280
    }
};
export default {
    name: '输入框',
    icon,
    type: widgetKind.dataEntry.type,
    component: React.memo(ProInput),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
