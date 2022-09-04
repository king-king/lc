/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import { addList } from '../config/index';

const { Title } = Typography;

function Edit() {
    const curBehaviorUUID = useSelector(state => state.vtree.curActionUUID);
    const list = useSelector(state => state.vtree.actionList);
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
    return curBehaviorUUID
        ? (
            <div className='lc-work-ground-behavior-edit'>
                <Title className='lc-work-ground-behavior-edit-title' level={5}>{`${label}-属性配置`}</Title>
                <div className='lc-work-ground-behavior-edit-content'>
                    {content}
                </div>
            </div>
        ) : undefined;
}

export default React.memo(Edit);
