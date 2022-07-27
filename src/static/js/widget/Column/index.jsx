import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { blockPlot } from '../../tools/widget';

function Column({ left, right }) {
    return (
        <div className='column-com'>
            <div className='column-left'>{left}</div>
            <div className='column-right'>{right}</div>
        </div>
    );
}

Column.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};
Column.defaultProps = {
    left: '',
    right: ''
};

export default {
    component: React.memo(Column),
    plots: {
        left: blockPlot,
        right: blockPlot
    }
};
