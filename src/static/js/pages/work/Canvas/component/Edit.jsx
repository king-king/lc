/*
 * Created by king at 2022-8-8 22:44:13
 * Copyright (c) 2022
 */

// 编辑组件属性
import React from 'react';
import { useSelector } from 'react-redux';
import { widgetSet } from '../../../../widget';
import { visitVTree } from '../../../../tools/visit';

function Edit() {
    const curUUID = useSelector(state => state.vtree.curUUID);
    const vtree = useSelector(state => state.vtree.value);
    let widget;
    visitVTree(vtree, node => {
        if (node.uuid === curUUID) {
            widget = node;
        }
    });
    let editProps = [];
    if (widget?.widget?.component && widgetSet[widget.widget.component]?.editProps) {
        editProps = widgetSet[widget.widget.component].editProps;
    }
    // 根据uuid查询出当前选中的组件的uuid
    return (
        <div key={curUUID}>
            <div>{curUUID}</div>
            <div>
                {editProps.map(item => item)}
            </div>
        </div>
    );
}

Edit.propTypes = {
};

export default React.memo(Edit);
