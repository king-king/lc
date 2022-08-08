/*
 * Created by king at 2022-8-8 22:44:13
 * Copyright (c) 2022
 */

// 编辑组件属性
import React from 'react';
import { useSelector } from 'react-redux';

function Edit() {
    const curUUID = useSelector(state => state.vtree.curUUID);
    // 根据uuid查询出当前选中的组件的uuid
    return (
        <div>
            {curUUID}
        </div>
    );
}

Edit.propTypes = {
};

export default React.memo(Edit);
