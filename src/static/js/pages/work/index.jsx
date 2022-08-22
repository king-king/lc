import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widgetList } from '../../widget/index';
import ComListItem from './component/ComListItem';
import Canvas from './component/Canvas';
import Edit from './component/Edit';
import './style/index.scss';

function Work() {
    return (
        <div>
            <div className='lc-work-header' />
            <div className='lc-work-ground'>
                <div className='lc-work-ground-component-list' data-id='lc-work-ground-component-list'>
                    {widgetList.map(widget => <ComListItem key={widget.name} widget={{ ...widget }} />)}
                </div>
                <div className='lc-work-ground-component-config' data-id='lc-work-ground-component-config'>
                    <Edit />
                </div>
                <Canvas />
            </div>
        </div>
    );
}

export default React.memo(Work);
