import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { current } from '@reduxjs/toolkit';
import { useRenderCanvasContent } from '../tools/vtree';
import { DATA_LC_WIDGET_UUID_KEY } from '../../../../config/index';
import { getClickWidget, highlightDom, visitChildren } from '../../../../tools/dom';
import { visitVTree } from '../../../../tools/visit';
import { setCurrentWidgetUUID, dele } from '../../../../redux/slice/vtree';

function Layout() {
    const curUUID = useSelector(state => state.vtree.curUUID);
    const content = useRenderCanvasContent();
    const layoutEl = useRef(null);
    const dispatch = useDispatch();
    const vtree = useSelector(state => state.vtree.value);
    useEffect(() => {
        const el = layoutEl.current;
        const process = ce => {
            const { uuid } = getClickWidget(ce.target);
            dispatch(setCurrentWidgetUUID(uuid));
        };
        el.addEventListener('click', process);
        return () => {
            el.addEventListener('click', process);
        };
    }, [dispatch]);

    useEffect(() => {
        let curSelectInfo = { uuid: curUUID };
        if (curUUID) {
            // 如果有落点，读取其虚拟树内容
            visitVTree(vtree, node => {
                if (node.uuid === curUUID) {
                    curSelectInfo = {
                        ...curSelectInfo,
                        ...node
                    };
                }
            });
            // 获取其真实dom
            visitChildren(layoutEl.current, node => {
                if (node.dataset[DATA_LC_WIDGET_UUID_KEY] === curUUID) {
                    curSelectInfo.el = node;
                }
            });
        }
        highlightDom(curSelectInfo, layoutEl.current, () => {
            // onDelete
            dispatch(dele({ uuid: curSelectInfo.uuid }));
        });
    }, [curUUID, dispatch, vtree]);
    return (
        <div className='lc-work-ground-component-layout-wrapper' ref={layoutEl}>
            <div className='lc-work-ground-component-layout' data-id='lc-work-ground-component-layout'>
                {content?.length ? content : <div className='lc-work-ground-component-layout-empty'>请拖入组件</div>}
            </div>
        </div>
    );
}

Layout.propTypes = {
};

export default React.memo(Layout);
