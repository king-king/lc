/*
 * Created by king at 2022-8-23 16:30:25
 * Copyright (c) 2022
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Tooltip } from 'antd';
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
                        <Tooltip title='UI布局' placement='right'><div className='lc-work-ground-icon-canvas' /></Tooltip>
                    </CustomLink>
                    <CustomLink to='/work/behavior'>
                        <Tooltip title='创建动作' placement='right'><div className='lc-work-ground-icon-behavior' /></Tooltip>
                    </CustomLink>
                    <CustomLink to='/work/tree'>
                        <Tooltip title='组件树' placement='right'><div className='lc-work-ground-icon-tree' /></Tooltip>
                    </CustomLink>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default React.memo(Work);
