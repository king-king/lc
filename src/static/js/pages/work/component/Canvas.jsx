import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useRenderCanvasContent } from '../tools/vtree';
import { getClickWidget, highlightDom } from '../../../tools/dom';
import { setCurrentWidgetUUID, delte } from '../../../redux/slice/vtree';

function Canvas() {
    const content = useRenderCanvasContent();
    const canvasEl = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        canvasEl.current.addEventListener('click', ce => {
            const info = getClickWidget(ce.target);
            highlightDom(info?.el, () => {
                // onDelete
                dispatch(delte({ uuid: info.uuid }));
            });
            dispatch(setCurrentWidgetUUID(info?.uuid));
        });
        // eslint-disable-next-line
    }, []);
    return (
        <div className='lc-work-ground-component-canvas-wrapper'>
            <div className='lc-work-ground-component-canvas' data-id='lc-work-ground-component-canvas' ref={canvasEl}>
                {content}
            </div>
        </div>
    );
}

Canvas.propTypes = {
};

export default React.memo(Canvas);
