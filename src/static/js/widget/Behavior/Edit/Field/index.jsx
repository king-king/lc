/*
 * Created by king at 2022-8-22 22:02:19
 * Copyright (c) 2022
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Input } from 'antd';
import FormItem from '../../../component/FormItem';
import { edit } from '../../../../redux/slice/behavior';
import './style.scss';

function Field({
    type, data = [], label, name, valid
}) {
    const [validResult, setValidResult] = useState();
    const dispatch = useDispatch();
    const list = useSelector(state => state.behavior.list);
    const curBehaviorUUID = useSelector(state => state.behavior.curBehaviorUUID);
    const curBahavior = list.find(item => item.uuid === curBehaviorUUID);
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
        children = <Input status={validResult?.length ? 'error' : undefined} onChange={e => onChange(e.target.value)} value={curBahavior.name} />;
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
    valid: PropTypes.func
};
Field.defaultProps = {
    data: [],
    valid: () => { }
};
export default Field;
