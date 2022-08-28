/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import { Table } from 'antd';
import { editTableColumns } from '../config';

function List() {
    return (
        <div className='lc-work-ground-behavior-list'>
            <Table className='lc-word-ground-api-table' columns={editTableColumns} size='small' />
        </div>
    );
}

export default React.memo(List);
