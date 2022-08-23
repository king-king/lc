/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import { PageHeader, Button, Table } from 'antd';
import Header from '../../component/Header';
import { columns } from './config';
import './style';

function Manage() {
    return (
        <div className='lc-manage'>
            <Header />
            <div className='lc-manage-list'>
                <PageHeader
                    title='页面管理'
                    subTitle='已经创建的页面会在这里展示'
                    extra={[
                        <Button type='primary'>创建新页面</Button>
                    ]}
                />
                <Table className='lc-manage-page-table' columns={columns} />
            </div>
        </div>
    );
}

export default React.memo(Manage);
