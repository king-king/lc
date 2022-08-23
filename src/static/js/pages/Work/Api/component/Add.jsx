/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function Add() {
    return (
        <div className='lc-work-ground-api-add'>
            <Title level={5}>请求</Title>
            <Title level={5}>动作</Title>
        </div>
    );
}

export default React.memo(Add);
