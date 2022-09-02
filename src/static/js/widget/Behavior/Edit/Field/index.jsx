/*
 * Created by king at 2022-8-22 22:02:19
 * Copyright (c) 2022
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Input, Radio } from 'antd';
import FormItem from '../../../component/FormItem';
import { edit } from '../../../../redux/slice/behavior';
import useCurBehavior from '../../tools/useCurBehavior';
import './style.scss';

function Field({
    type, data = [], label, name, valid, placeholder, addonBefore
}) {
    const [validResult, setValidResult] = useState();
    const dispatch = useDispatch();
    const list = useSelector(state => state.behavior.list);
    const curBehaviorUUID = useSelector(state => state.behavior.curBehaviorUUID);
    const curBahavior = useCurBehavior();
    const onChange = value => {
        const check = valid(value, list, curBehaviorUUID);
        setValidResult(check);
        if (!check) {
            dispatch(edit({
                propsName: name,
                propsValue: value
            }));
        }
    };
    let children;
    if (type === 'select') {
        children = (
            <Select defaultValue={data[0].value} onChange={onChange}>
                {data.map(item => <Select.Option value={item.value}>{item.label}</Select.Option>)}
            </Select>
        );
    } else if (type === 'input') {
        const config = {
            size: 'small',
            status: validResult?.length ? 'error' : undefined,
            onChange: e => onChange(e.target.value),
            value: curBahavior[name],
            placeholder,
            addonBefore
        };
        children = <Input {...config} />;
    } else if (type === 'radioButon') {
        children = (
            <Radio.Group size='small' defaultValue={curBahavior.method} buttonStyle='solid' size='small'>
                {data.map(item => <Radio.Button key={item.value} value={item.value}>{item.label}</Radio.Button>)}
            </Radio.Group>
        );
    } else if (type === 'multipleSelect') {
        children = (
            <Select size='small' defaultValue={curBahavior.filter} onChange={onChange} mode='multiple' style={{ width: '100%' }} maxTagCount='responsive' allowClear>
                {data.map(item => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)}
            </Select>
        );
    }
    return (
        <div className='lc-behavior-field'>
            <FormItem label={label} valid={validResult}>
                {children}
            </FormItem>
        </div>
    );
}

Field.propTypes = {
    data: PropTypes.any,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    valid: PropTypes.func,
    placeholder: PropTypes.string,
    addonBefore: PropTypes.string
};
Field.defaultProps = {
    data: [],
    valid: () => { },
    placeholder: '',
    addonBefore: ''
};
export default Field;
