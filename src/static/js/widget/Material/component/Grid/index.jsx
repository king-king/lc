import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { blockPlot } from '../../../../tools/widget';
import icon from '../../image/grid.svg';
import { widgetKind } from '../../../../config';

function Grid({ left, right }) {
    return (
        <div className='grid-com'>
            <div className='grid-left'>{left}</div>
            <div className='grid-right'>{right}</div>
        </div>
    );
}

Grid.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};
Grid.defaultProps = {
    left: '',
    right: ''
};

export default {
    name: '两列布局',
    icon,
    type: widgetKind.layout.type,
    component: React.memo(Grid),
    plots: {
        left: blockPlot,
        right: blockPlot
    },
    editProps: []
};
