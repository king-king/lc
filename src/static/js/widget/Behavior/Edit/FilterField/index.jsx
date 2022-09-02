/*
 * Created by king at 2022-9-2 14:36:10
 * Copyright (c) 2022
 */

// 专门用于获取接口的filter

import React from 'react';
import Field from '../Field';

function FilterField() {
    const config = {
        label: '参数',
        type: 'multipleSelect',
        name: 'filter',
        data: [{
            label: '筛选内容输入框1',
            value: '$input1'
        }, {
            label: '筛选内容输入框2',
            value: '$input2'
        }, {
            label: '筛选内容输入框3',
            value: '$input3'
        }, {
            label: '筛选内容输入框4',
            value: '$input4'
        }, {
            label: '筛选内容输入框5',
            value: '$input5'
        }, {
            label: '筛选组',
            value: '$formgroup'
        }]
    };
    return (
        <Field {...config} />
    );
}

FilterField.propTypes = {
};
FilterField.defaultProps = {
};
export default FilterField;
