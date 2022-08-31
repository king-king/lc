/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React, { useState } from 'react';
import { Typography, Radio, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addList } from '../config/index';
import { add } from '../../../../redux/slice/behavior';

const { Title } = Typography;

function Add() {
    const dispatch = useDispatch();
    const [value, setValue] = useState({});
    const onRadioChange = item => {
        const curValue = { value: item.target.value };
        let curItem;
        addList.forEach(block => {
            block.list.forEach(bItem => {
                if (bItem.value === item.target.value) {
                    curItem = bItem;
                }
            });
        });
        curValue.label = curItem.label;
        curValue.defaultParams = curItem.defaultParams;
        setValue(curValue);
    };
    const onAdd = () => {
        dispatch(add({
            // 根据类型配置一些默认值
            ...value.defaultParams,
            id: value.value,
            name: value.label,
            type: value.value,
            typeName: value.label
        }));
    };
    return (
        <div className='lc-work-ground-behavior-add'>
            {addList.map(item => (
                <div key={item.label}>
                    <Title className='lc-work-ground-behavior-add-title' level={5}>{item.label}</Title>
                    <Radio.Group className='lc-work-ground-behavior-add-radio' size='small' options={item.list} onChange={onRadioChange} value={value.value} />
                </div>
            ))}
            <Button className='lc-work-ground-behavior-add-button' block disabled={!value.value} onClick={onAdd}>添加</Button>
        </div>
    );
}
Add.propTypes = {
};
export default React.memo(Add);
