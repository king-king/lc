/*
 * Created by king at 2022-8-8 22:44:13
 * Copyright (c) 2022
 */

// 编辑组件属性
import React from 'react';
import { widgetSet } from '../../../../widget/Material';
import useCurWidget from '../../../../tools/hook/useCurWidget';

function Edit() {
    const widget = useCurWidget();
    let editProps = [];
    if (widget?.widget?.component && widgetSet[widget.widget.component]?.editProps) {
        editProps = widgetSet[widget.widget.component].editProps;
    }
    // 根据uuid查询出当前选中的组件的uuid
    return (
        <div className={`lc-work-ground-component-edit-panel ${widget ? '' : 'hide'}`}>
            <div className='lc-work-ground-component-edit-panel-com-title'>{`${widget?.widget?.name}组件-配置`}</div>
            <div className='lc-work-ground-component-edit-panel-com-props'>
                {editProps.map(item => item)}
            </div>
        </div>
    );
}

Edit.propTypes = {
};

export default React.memo(Edit);
