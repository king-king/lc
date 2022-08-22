import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Field from '../../Edit/Field';
import { blockPlot } from '../../../tools/widget';

function Inner({ children, bgColor }) {
    return (
        <div className='inner-com' style={{ backgroundColor: bgColor }}>{children}</div>
    );
}

Inner.propTypes = {
    bgColor: PropTypes.string,
    children: PropTypes.node
};
Inner.defaultProps = {
    bgColor: 'red',
    children: ''
};
export default {
    component: React.memo(Inner),
    plots: {
        children: blockPlot
    },
    editProps: [
        <Field
            name='bgColor'
            type='select'
            label='颜色'
            data={[
                {
                    label: '蓝色',
                    value: 'blue'
                }, {
                    label: '黄色',
                    value: 'yellow'
                }
            ]}
        />
    ]
};
