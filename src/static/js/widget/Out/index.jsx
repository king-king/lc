import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Out({ children, x, y }) {
    const style = {
        left: `${x - 250 - 50}px`,
        top: `${y - 50}px`
    };
    return (
        <div className='outer-com' style={style}>{children}</div>
    );
}

Out.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    children: PropTypes.node
};
Out.defaultProps = {
    children: ''
};
export default React.memo(Out);
