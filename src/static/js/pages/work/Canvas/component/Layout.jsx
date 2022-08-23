import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { current } from '@reduxjs/toolkit';
import { useRenderCanvasContent } from '../tools/vtree';
import { getClickWidget, highlightDom } from '../../../../tools/dom';
import { visitVTree } from '../../../../tools/visit';
import { setCurrentWidgetUUID, dele } from '../../../../redux/slice/vtree';

function Layout() {
    const content = useRenderCanvasContent();
    const layoutEl = useRef(null);
    const dispatch = useDispatch();
    const vtree = useSelector(state => state.vtree.value);
    useEffect(() => {
        const cavnasDom = layoutEl.current;
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
            highlightDom(info, cavnasDom, () => {
                // onDelete
                dispatch(dele({ uuid: info.uuid }));
            });
            dispatch(setCurrentWidgetUUID(info.uuid));
        };
        cavnasDom.addEventListener('click', process);
        return () => {
            cavnasDom.removeEventListener('click', process);
        };
    }, [dispatch, vtree]);
    return (
        <div className='lc-work-ground-component-layout-wrapper' ref={layoutEl}>
            <div className='lc-work-ground-component-layout' data-id='lc-work-ground-component-layout'>
                {content}
            </div>
        </div>
    );
}

Layout.propTypes = {
};

export default React.memo(Layout);
