import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function Canvas() {
    const vtree = useSelector(state => state.vtree.value);
    return (
        <div className='lc-work-ground-component-canvas' data-id='lc-work-ground-component-canvas'>
            {vtree.map(({
                x, y, key, widget
            }) => {
                const config = {
                    key,
                    x: x - 250,
                    y
                };
                const Component = widget.component;
                const dom = <Component {...config} />;
                return dom;
            })}
        </div>
    );
}

Canvas.propTypes = {
};

export default React.memo(Canvas);
