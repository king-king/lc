/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React, { useEffect } from 'react';
import { PageHeader, Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../component/Header';
import { fetchPage } from '../../../redux/slice/business';
import { columns } from './config';
import './style';

function BusinessList() {
    const dispatch = useDispatch();
    const dataSource = useSelector(state => state.business.list);
    useEffect(() => {
        dispatch(fetchPage('yes'));
    }, [dispatch]);
    // 操作列
    columns[columns.length - 1].render = () => (
        <div>
            <Button type='link'>编辑</Button>
            <Button type='link'>删除</Button>
            <Button type='link'>统计</Button>
        </div>
    );
    return (
        <div className='lc-business'>
            <Header />
            <div className='lc-business-list'>
                <PageHeader
                    title='业务线管理'
                    subTitle='可以编辑、创建业务线'
                    extra={[
                        <Button key='create' type='primary'>创建业务线</Button>
                    ]}
                />
                <Table className='lc-business-page-table' columns={columns} dataSource={dataSource} />
            </div>
        </div>
    );
}

export default React.memo(BusinessList);
