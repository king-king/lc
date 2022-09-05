/*
 * Created by king at 2022-8-22 22:02:19
 * Copyright (c) 2022
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Select, Radio } from 'antd';
import FormItem from '../../../component/FormItem';
import { editWidgetProps } from '../../../../redux/slice/vtree';
import './style.scss';

// TODO:默认值的逻辑还没实现
function Field({
    type, data, label, name, defaultValue
}) {
    const dispatch = useDispatch();
    const onValueChange = value => {
        // 下拉框的onChange
        dispatch(editWidgetProps({
            propsName: name,
            propsValue: value
        }));
    };
    let children;
    if (type === 'select') {
        children = (
            <Select defaultValue={defaultValue || data[0].value} onChange={onValueChange} size='small' style={{ width: '100%' }}>
                {data.map(item => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)}
            </Select>
        );
    } else if (type === 'radio') {
        children = (
            <Radio.Group defaultValue={defaultValue || data[0].value} onChange={e => onValueChange(e.target.value)} size='small' options={data} />
        );
    }
    return (
        <div className='lc-component-field'>
            <FormItem label={label}>
                {children}
            </FormItem>
        </div>
    );
}

Field.propTypes = {
    data: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};
export default Field;
