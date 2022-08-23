/*
 * Created by king at 2022-8-23 16:30:25
 * Copyright (c) 2022
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../component/Header';
import CustomLink from '../../component/CustomLink';
import './style/index.scss';

function Work() {
    return (
        <div>
            <Header />
            <div className='lc-work-ground'>
                <div className='lc-work-ground-left-menu'>
                    <CustomLink to='/work/canvas'>
                        <div className='lc-work-ground-icon-canvas' />
                    </CustomLink>
                    <CustomLink to='/work/api'>
                        <div className='lc-work-ground-icon-api' />
                    </CustomLink>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default React.memo(Work);
