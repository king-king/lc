import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Inner({ children }) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `rgba(${r},${g},${b},1)`;
    const backgroundColor = useRef(color);

    return (
        <div className='inner-com' style={{ backgroundColor: backgroundColor.current }}>{children}</div>
    );
}

Inner.propTypes = {
    children: PropTypes.node
};
Inner.defaultProps = {
    children: ''
};
export default {
    component: React.memo(Inner),
    plot: {
        children: true
    }
};
