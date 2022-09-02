/*
 * Created by king at 2022-9-2 14:59:23
 * Copyright (c) 2022
 */

// 专配置通用接口的返回值
import { Input, Tooltip, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import FormItem from '../../../component/FormItem';
import './style';

function CommonApiReturnValue() {
    const [list, setList] = useState([]);
    const add = () => {
        setList([...list, { key: `key${list.length}`, name: `指标${list.length}`, desc: '指标描述' }]);
    };
    const onDelete = index => {
        setList(list.filter((item, i) => i !== index));
    };
    return (
        <FormItem label='返回值'>
            {list.map((item, index) => (
                <Input
                    className='common-api-return-value'
                    key={item.key}
                    value={`${item.name}（${item.key}）`}
                    suffix={(
                        <div>
                            <Tooltip title='删除'>
                                <DeleteOutlined style={{ color: 'rgba(0,0,0,.45)' }} onClick={() => { onDelete(index); }} />
                            </Tooltip>
                            <Tooltip title='编辑'>
                                <EditOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        </div>
                    )}
                />
            ))}
            <Button size='small' onClick={add}>添加</Button>
        </FormItem>
    );
}

CommonApiReturnValue.propTypes = {
};
CommonApiReturnValue.defaultProps = {
};
export default CommonApiReturnValue;
