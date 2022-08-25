/*
 * Created by king at 2022-8-25 18:40:26
 * Copyright (c) 2022
 */

// 获取某条业务线下的页面列表

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../component/Header';
import { fetchBusinessPageList } from '../../../redux/slice/business';
import { columns } from './config';
import './style';

function BusinessPageList() {
    const dispatch = useDispatch();
    const dataSource = useSelector(state => state.business.pageList);
    useEffect(() => {
        document.title = '业务线页面列表';
        dispatch(fetchBusinessPageList());
    }, [dispatch]);
    // 操作列
    columns[columns.length - 1].render = () => (
        <div>
            <Button type='link'>操作历史</Button>
            <Button type='link'>修改线上版本</Button>
        </div>
    );
    return (
        <div className='lc-business'>
            <Header />
            <div className='lc-business-list'>
                <PageHeader
                    title='业务线页面列表'
                    subTitle='显示当前业务线已经接入的页面，可以修改页面的版本'
                    extra={[
                        <Button key='create' type='primary'>页面接入</Button>
                    ]}
                />
                <Table className='lc-business-page-table' columns={columns} dataSource={dataSource} />
            </div>
        </div>
    );
}

export default React.memo(BusinessPageList);
