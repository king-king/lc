import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import './style.scss';
import icon from '../../image/radio.svg';
import { widgetKind } from '../../../../config';

function ProRadio({ data, setValue }) {
    const onChange = e => setValue({ value: e.target.value }, 'value');
    return (
        <Radio.Group onChange={onChange}>
            {data.map(item => <Radio key={item.value} value={item.value}>{item.label}</Radio>)}
        </Radio.Group>
    );
}

ProRadio.propTypes = {
    data: PropTypes.array
};
ProRadio.defaultProps = {
    data: [{ value: '1', label: '选项1' }, { value: '2', label: '选项2' }]
};
export default {
    name: '单选框',
    icon,
    type: widgetKind.dataEntry.type,
    component: React.memo(ProRadio),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
