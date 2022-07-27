import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widgetList } from '../../widget/index';
import ComListItem from './component/ComListItem';
import Canvas from './component/Canvas';
import './style/index.scss';

function Work() {
    const count = useSelector(state => state.vtree.value);
    return (
        <div className='lc-work-ground'>
            <div className='lc-work-ground-component-list' data-id='lc-work-ground-component-list'>
                {widgetList.map(widget => <ComListItem key={widget.name} widget={{ ...widget }} />)}
            </div>
            <div className='lc-work-ground-component-config' data-id='lc-work-ground-component-config'>
                {count.length}
            </div>
            <Canvas />
        </div>
    );
}

export default React.memo(Work);
