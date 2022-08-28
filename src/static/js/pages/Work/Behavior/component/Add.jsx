/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React, { useState } from 'react';
import { Typography, Radio } from 'antd';

const { Title } = Typography;

function Add() {
    const requestList = [{
        label: '通用接口',
        value: 'common_request'
    }];
    const behaviorList = [{
        label: '通用行为',
        value: 'common_behavior'
    }];
    const [value, setValue] = useState();
    const onChange = item => {
        setValue(item.target.value);
    };
    return (
        <div className='lc-work-ground-api-add'>
            <Title className='lc-work-ground-api-add-title' level={5}>请求</Title>
            <Radio.Group className='lc-work-ground-api-add-radio' size='small' options={requestList} onChange={onChange} value={value} />
            <Title className='lc-work-ground-api-add-title' level={5}>动作</Title>
            <Radio.Group className='lc-work-ground-api-add-radio' size='small' options={behaviorList} onChange={onChange} value={value} />
        </div>
    );
}

export default React.memo(Add);
