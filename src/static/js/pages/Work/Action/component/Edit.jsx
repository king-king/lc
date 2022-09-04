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
    const curActionUUID = useSelector(state => state.vtree.curActionUUID);
    const list = useSelector(state => state.vtree.actionList);
    const curBahavior = list.find(item => item.uuid === curActionUUID);
    let content;
    let label;
    if (curActionUUID) {
        addList.forEach(item => {
            item.list.forEach(({ label: actionLabel, value, EditContent }) => {
                if (value === curBahavior?.type) {
                    label = actionLabel;
                    content = <EditContent />;
                }
            });
        });
    }
    return curActionUUID
        ? (
            <div className='lc-work-ground-action-edit'>
                <Title className='lc-work-ground-action-edit-title' level={5}>{`${label}-属性配置`}</Title>
                <div className='lc-work-ground-action-edit-content'>
                    {content}
                </div>
            </div>
        ) : undefined;
}

export default React.memo(Edit);
