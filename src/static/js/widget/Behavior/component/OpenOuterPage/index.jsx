/*
 * Created by king at 2022-8-29 20:41:53
 * Copyright (c) 2022
 */

import React from 'react';
import Field from '../../Edit/Field';

function OpenOuterPage() {
    const validName = (value, list, curBehaviorUUID) => {
        // 名称不能重复
        let result;
        if (value.length === 0) {
            result = '名称不能为空';
        } else {
            list.forEach(item => {
                if (item.uuid !== curBehaviorUUID) {
                    if (item.name === value) {
                        result = '名称不能重复';
                    }
                }
            });
        }
        return result;
    };
    return (
        <div className='behavior-common-api'>
            <Field label='名称' type='input' valid={validName} name='name' />
        </div>
    );
}

OpenOuterPage.propTypes = {
};
OpenOuterPage.defaultProps = {
};
export default React.memo(OpenOuterPage);
