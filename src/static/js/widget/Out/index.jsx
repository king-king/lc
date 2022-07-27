import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Out({ children }) {
    return (
        <div className='outer-com'>{children}</div>
    );
}

Out.propTypes = {
    children: PropTypes.node
};
Out.defaultProps = {
    children: ''
};

export default {
    component: React.memo(Out),
    plot: {
        children: true
    }
};
