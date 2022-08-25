/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../component/Header';
import { fetchPage } from '../../../redux/slice/page';
import { columns } from './config';
import './style';

function PageList() {
    const dispatch = useDispatch();
    const dataSource = useSelector(state => state.page.list).map(line => ({
        key: line.id,
        ...line
    }));
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
        <div className='lc-manage'>
            <Header />
            <div className='lc-manage-list'>
                <PageHeader
                    title='控制台'
                    subTitle='已经创建的页面会在这里展示'
                    extra={[
                        <Button key='businesslist' type='primary'>
                            <Link to='/manage/businesslist'>业务线管理</Link>
                        </Button>,
                        <Button key='create' type='primary'>
                            <Link to='/work/canvas'>创建新页面</Link>
                        </Button>
                    ]}
                />
                <Table className='lc-manage-page-table' columns={columns} dataSource={dataSource} />
            </div>
        </div>
    );
}

export default React.memo(PageList);
