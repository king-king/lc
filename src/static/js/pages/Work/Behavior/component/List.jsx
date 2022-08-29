/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editTableColumns } from '../config';

function List() {
    const dataSource = useSelector(state => state.behavior.list).map(line => ({
        key: line.uuid,
        ...line
    }));
    return (
        <div className='lc-work-ground-behavior-list'>
            <Table className='lc-word-ground-api-table' dataSource={dataSource} columns={editTableColumns} size='small' pagination={false} />
        </div>
    );
}

export default React.memo(List);
