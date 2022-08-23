import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './style/index.scss';

function Work() {
    return (
        <div>
            <div className='lc-work-header' />
            <div className='lc-work-ground'>
                <div className='lc-work-ground-left-menu'>
                    <Link to='/work/canvas'>
                        <div className='lc-work-ground-icon-canvas' />
                    </Link>
                    <Link to='/work/api'>
                        <div className='lc-work-ground-icon-api' />
                    </Link>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default React.memo(Work);
