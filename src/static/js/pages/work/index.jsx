import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ComListItem from './component/ComListItem';
import { list } from './config/component';
import './style/index.scss';

function Work() {
    const count = useSelector(state => state.vtree.value);
    return (
        <div className='lc-work-ground'>
            <div className='lc-work-ground-component-list' data-id='lc-work-ground-component-list'>
                {list.map(component => <ComListItem key={component.name} name={component.name} />)}
            </div>
            <div className='lc-work-ground-component-config' data-id='lc-work-ground-component-config'>
                {count.length}
            </div>
            <div className='lc-work-ground-component-canvas' data-id='lc-work-ground-component-canvas' />
        </div>
    );
}

export default React.memo(Work);
