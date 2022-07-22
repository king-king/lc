import React, { useState, useEffect } from 'react';
import ComListItem from './component/ComListItem';
import { list } from './config/component';
import './style/index.scss';

function Work() {
    return (
        <div className='lc-work-ground'>
            <div className='lc-work-ground-component-list'>
                {list.map(component => <ComListItem key={component.name} name={component.name} />)}
            </div>
            <div className='lc-work-ground-component-config' />
            <div className='lc-work-ground-component-layout' />
        </div>
    );
}

export default React.memo(Work);
