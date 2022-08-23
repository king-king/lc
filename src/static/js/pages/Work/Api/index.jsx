/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import Add from './component/Add';
import List from './component/List';
import Edit from './component/Edit';
import './style';

function Api() {
    return (
        <div className='lc-work-ground-api'>
            <Add />
            <List />
            <Edit />
        </div>
    );
}

export default React.memo(Api);
