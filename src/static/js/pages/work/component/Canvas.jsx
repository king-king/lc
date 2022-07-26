import React from 'react';
import { useRenderCanvasContent } from '../tools/vtree';

function Canvas() {
    const content = useRenderCanvasContent();
    return (
        <div className='lc-work-ground-component-canvas' data-id='lc-work-ground-component-canvas'>
            {content}
        </div>
    );
}

Canvas.propTypes = {
};

export default React.memo(Canvas);
