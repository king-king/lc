import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import './style.scss';

function ProRadio({ data }) {
    return (
        // <Radio data={data} />
        <Radio.Group>
            {data.map(item => <Radio value={item.value}>{item.label}</Radio>)}
        </Radio.Group>
    );
}

ProRadio.propTypes = {
    data: PropTypes.array
};
ProRadio.defaultProps = {
    data: [{ value: '1', label: '选项1' }, { value: '2', label: '选项2' }]
};
export default {
    component: React.memo(ProRadio),
    // 声明可以触发的事件
    event: [],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
