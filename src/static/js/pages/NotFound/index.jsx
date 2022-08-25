/*
 * Created by king at 2022-8-23 21:32:34
 * Copyright (c) 2022
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Header from '../../component/Header';
import Section from '../../component/Section';
import './style/index.scss';

function NotFound() {
    return (
        <div>
            <Header />
            <Section className='not-found'>
                <Button type='primary'>
                    <Link to='/manage/page/list'>去往首页</Link>
                </Button>
            </Section>
        </div>
    );
}

export default React.memo(NotFound);
