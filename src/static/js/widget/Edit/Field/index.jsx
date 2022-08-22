/*
 * Created by king at 2022-8-22 22:02:19
 * Copyright (c) 2022
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Select } from 'antd';
import { editProps } from '../../../redux/slice/vtree';
import './style.scss';

function Field({
    type, data, label, name
}) {
    const dispatch = useDispatch();
    const onSelectChange = value => {
        // 下拉框的onChange
        dispatch(editProps({
            propsName: name,
            propsValue: value
        }));
    };
    let children;
    if (type === 'select') {
        children = (
            <Select defaultValue={data[0].value} onChange={onSelectChange}>
                {data.map(item => <Select.Option value={item.value}>{item.label}</Select.Option>)}
            </Select>
        );
    }
    return (
        <div className='lc-field'>
            <div className='lc-field-label'>{label}</div>
            <div className='lc-field-content'>
                {children}
            </div>
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
