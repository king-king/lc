/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import { Table, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { dele } from '../../../../redux/slice/behavior';
import { editTableColumns } from '../config';

function List() {
    const dispatch = useDispatch();
    const dataSource = useSelector(state => state.behavior.list).map(line => ({
        key: line.uuid,
        ...line
    }));
    const deleteBehavior = uuid => {
        dispatch(dele({ uuid }));
    };
    // 操作列
    editTableColumns[editTableColumns.length - 1].render = (text, record) => (
        <div>
            <Button type='link' onClick={() => deleteBehavior(record.uuid)}>删除</Button>
        </div>
    );
    return (
        <div className='lc-work-ground-behavior-list'>
            <Table className='lc-word-ground-api-table' dataSource={dataSource} columns={editTableColumns} size='small' pagination={false} />
        </div>
    );
}

export default React.memo(List);
