import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function Canvas() {
    const vtree = useSelector(state => state.vtree.value);
    return (
        <div className='lc-work-ground-component-canvas' data-id='lc-work-ground-component-canvas'>
            {vtree.map(({ x, y, key }) => {
                const style = {
                    left: `${x - 250 - 50}px`,
                    top: `${y - 50}px`,
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'red'
                };
                return <div key={key} style={style} />;
            })}
        </div>
    );
}

Canvas.propTypes = {
};

export default React.memo(Canvas);
