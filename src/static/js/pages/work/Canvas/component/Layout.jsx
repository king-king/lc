import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { current } from '@reduxjs/toolkit';
import { useRenderCanvasContent } from '../tools/vtree';
import { getClickWidget, highlightDom } from '../../../../tools/dom';
import { visitVTree } from '../../../../tools/visit';
import { setCurrentWidgetUUID, dele } from '../../../../redux/slice/vtree';

function Layout() {
    const content = useRenderCanvasContent();
    const canvasEl = useRef(null);
    const dispatch = useDispatch();
    const vtree = useSelector(state => state.vtree.value);
    useEffect(() => {
        const process = ce => {
            let info = getClickWidget(ce.target);
            if (info.uuid) {
                // 如果有落点，读取其内容
                visitVTree(vtree, node => {
                    if (node.uuid === info.uuid) {
                        info = {
                            ...info,
                            ...node
                        };
                    }
                });
            }
            highlightDom(info, () => {
                // onDelete
                dispatch(dele({ uuid: info.uuid }));
            });
            dispatch(setCurrentWidgetUUID(info.uuid));
        };
        const el = canvasEl.current;
        el.addEventListener('click', process);
        return () => {
            el.removeEventListener('click', process);
        };
        // eslint-disable-next-line
    }, [vtree]);
    return (
        <div className='lc-work-ground-component-canvas-wrapper'>
            <div className='lc-work-ground-component-canvas' data-id='lc-work-ground-component-canvas' ref={canvasEl}>
                {content}
            </div>
        </div>
    );
}

Layout.propTypes = {
};

export default React.memo(Layout);
