/*
 * Created by king at 2022-9-2 14:59:23
 * Copyright (c) 2022
 */

// 专配置通用接口的返回值
import { v4 as uuidv4 } from 'uuid';
import {
    Input, Tooltip, Button, Popover, Select
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import FormItem from '../../../component/FormItem';
import './style';

function CommonApiReturnValue() {
    const [list, setList] = useState([{
        uuid: uuidv4(),
        key: 'key1',
        name: '指标1',
        desc: '指标描述',
        formate: undefined
    }]);
    const add = () => {
        setList([...list, {
            uuid: uuidv4(), key: `key${list.length}`, name: `指标${list.length}`, desc: '指标描述', formate: undefined
        }]);
    };
    const onDelete = index => {
        setList(list.filter((item, i) => i !== index));
    };
    const onEditContentChange = (uuid, propsName, value) => {
        const newList = JSON.parse(JSON.stringify(list));
        newList.forEach(item => {
            if (item.uuid === uuid) {
                item[propsName] = value;
            }
        });
        setList(newList);
    };
    const data = [
        { value: 'number', label: '整数' },
        { value: 'number_2', label: '小数' },
        { value: 'people', label: '人名' },
        { value: 'nation', label: '国家' },
        { value: 'province', label: '地域（省）' },
        { value: 'city', label: '地域（市）' },
        { value: 'region', label: '地域（项）' }
    ];
    const editContent = line => (
        <div>
            <FormItem label='名称'>
                <Input size='small' defaultValue={line.name} onChange={e => onEditContentChange(line.uuid, 'name', e.target.value)} />
            </FormItem>
            <FormItem label='字段'>
                <Input size='small' defaultValue={line.key} onChange={e => onEditContentChange(line.uuid, 'key', e.target.value)} />
            </FormItem>
            <FormItem label='类型'>
                <Select size='small' style={{ width: '100%' }} defaultValue={line.formate} onChange={value => onEditContentChange(line.uuid, 'formate', value)}>
                    {data.map(item => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)}
                </Select>
            </FormItem>
            <FormItem label='描述'>
                <Input size='small' defaultValue={line.desc} onChange={e => onEditContentChange(line.uuid, 'desc', e.target.value)} />
            </FormItem>
        </div>
    );
    return (
        <FormItem label='返回值'>
            {list.map((item, index) => (
                <Popover key={item.uuid} placement='left' title='编辑' mouseEnterDelay={1} trigger='hover' content={editContent(item)}>
                    <div>
                        <Input
                            className='common-api-return-value'
                            value={`${item.name}（${item.key}）`}
                            suffix={(
                                <div>
                                    <Tooltip title='删除'>
                                        <DeleteOutlined style={{ color: 'rgba(0,0,0,.45)' }} onClick={() => { onDelete(index); }} />
                                    </Tooltip>
                                </div>
                            )}
                        />
                    </div>
                </Popover>
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
