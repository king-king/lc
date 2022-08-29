/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import { useSelector } from 'react-redux';

function Edit() {
    const curBehaviorUUID = useSelector(state => state.behavior.curBehaviorUUID);
    return (
        <div className='lc-work-ground-behavior-edit'>
            {curBehaviorUUID}
        </div>
    );
}

export default React.memo(Edit);
