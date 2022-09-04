import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import './style.scss';
import icon from '../../image/checkbox.svg';
import { widgetKind } from '../../../../config';

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
    name: '多选框',
    icon,
    type: widgetKind.dataEntry.type,
    component: React.memo(ProCheckbox),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
