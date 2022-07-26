import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Inner({ children }) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return (
        <div className='inner-com' style={{ backgroundColor: `rgba(${r},${g},${b},${Math.random()})` }}>{children}</div>
    );
}

Inner.propTypes = {
    children: PropTypes.node
};
Inner.defaultProps = {
    children: ''
};
export default React.memo(Inner);
