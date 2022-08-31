/*
 * Created by king at 2022-8-29 20:41:53
 * Copyright (c) 2022
 */

import React from 'react';
import Field from '../../Edit/Field';
import { validName, validId } from '../../tools/check';

function CommonApi() {
    const config = {
        method: {
            label: '方法',
            type: 'radioButon',
            name: 'method',
            data: [{
                value: 'get',
                label: 'get'
            }, {
                value: 'post',
                label: 'post'
            }]
        }
    };
    return (
        <div className='behavior-common-api'>
            <Field label='名称' type='input' valid={validName} name='name' />
            <Field label='接口id' type='input' valid={validId} name='id' />
            <Field label='url' type='input' name='url' placeholder='请输入请求的url' addonBefore='//' />
            <Field {...config.method} />
        </div>
    );
}

CommonApi.propTypes = {
};
CommonApi.defaultProps = {
};
export default {
    Component: React.memo(CommonApi),
    defaultParams: {
        method: 'get'
    }
};
