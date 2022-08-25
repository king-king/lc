/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../component/Header';
import Section from '../../../component/Section';
import { } from './config';
import './style';

function BusinessInsight() {
    return (
        <div>
            <Header />
            <Section className='lc-business-insight'>
                <PageHeader
                    title='统计明细'
                    subTitle='展示业务线下各个页面的使用情况'
                />
            </Section>
        </div>
    );
}

export default React.memo(BusinessInsight);
