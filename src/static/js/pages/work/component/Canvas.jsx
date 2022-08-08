import React, { useEffect, useRef } from 'react';
import { useRenderCanvasContent } from '../tools/vtree';
import { getClickWidget } from '../../../tools/dom';

function Canvas() {
    const content = useRenderCanvasContent();
    const canvasEl = useRef(null);
    useEffect(() => {
        canvasEl.current.addEventListener('click', ce => {
            getClickWidget(ce.target);
        });
    }, []);
    return (
        <div className='lc-work-ground-component-canvas' data-id='lc-work-ground-component-canvas' ref={canvasEl}>
            {content}
        </div>
    );
}

Canvas.propTypes = {
};

export default React.memo(Canvas);
