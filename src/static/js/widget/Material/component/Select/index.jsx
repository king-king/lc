import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import './style.scss';
import icon from '../../image/select.svg';
import { widgetKind } from '../../../../config';

function ProSelect({ style }) {
    return (
        <Select style={style} />
    );
}

ProSelect.propTypes = {
    style: PropTypes.object
};
ProSelect.defaultProps = {
    style: {
        width: 280
    }
};
export default {
    name: '下拉框',
    icon,
    type: widgetKind.dataEntry.type,
    component: React.memo(ProSelect),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
