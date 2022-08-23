import React from 'react';
import { Outlet } from 'react-router-dom';
import './style/index.scss';

function Work() {
    return (
        <div>
            <div className='lc-work-header' />
            <div className='lc-work-ground'>
                <div className='lc-work-ground-left-menu'>
                    <div className='lc-work-ground-icon-canvas' />
                    <div className='lc-work-ground-icon-api' />
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default React.memo(Work);
