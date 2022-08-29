/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { addList } from '../config/index';

function Edit() {
    const curBehaviorUUID = useSelector(state => state.behavior.curBehaviorUUID);
    const list = useSelector(state => state.behavior.list);
    const curBahavior = list.find(item => item.uuid === curBehaviorUUID);
    let content;
    let label;
    if (curBehaviorUUID) {
        addList.forEach(item => {
            item.list.forEach(({ label: behaviorLabel, value, EditContent }) => {
                if (value === curBahavior?.type) {
                    label = behaviorLabel;
                    content = <EditContent />;
                }
            });
        });
    }
    return (
        <div className='lc-work-ground-behavior-edit'>
            <div>{`${label}-属性配置`}</div>
            <div>
                {content}
            </div>
        </div>
    );
}

export default React.memo(Edit);
