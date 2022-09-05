import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import Field from '../../Edit/Field';
import './style.scss';
import icon from '../../image/radio.svg';
import { widgetKind } from '../../../../config';

function ProRadio({
    data, setValue, size, optionType, buttonStyle
}) {
    const onChange = e => setValue({ value: e.target.value }, 'value');
    return (
        <Radio.Group
            onChange={onChange}
            size={size}
            options={data}
            optionType={optionType}
            buttonStyle={buttonStyle}
        />
    );
}

ProRadio.propTypes = {
    data: PropTypes.array,
    size: PropTypes.string
};
ProRadio.defaultProps = {
    data: [{ value: '1', label: '选项1' }, { value: '2', label: '选项2' }],
    size: 'middle'
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
    editProps: [
        <Field type='radio' key='optionType' name='optionType' label='类型' data={[{ value: 'default', label: '默认' }, { value: 'button', label: '按钮型' }]} />,
        <Field type='radio' key='size' name='size' label='尺寸' data={[{ value: 'large', label: '大' }, { value: 'middle', label: '中' }, { value: 'small', label: '小' }]} />,
        <Field type='radio' key='buttonStyle' name='buttonStyle' label='按钮样式' data={[{ value: 'outline', label: '描边' }, { value: 'solid', label: '填色' }]} />
    ]
};
