/*
 * Created by king at 2022-8-23 21:32:34
 * Copyright (c) 2022
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './style';

function Home() {
    return (
        <div className='lc-home'>
            <header className='lc-home-header'>
                <div className='lc-home-logo' />
                <div className='lc-home-control'>
                    <div className='lc-home-control-item'>
                        <Link to='/manage/page/list'>控制台</Link>
                    </div>
                    <div className='lc-home-control-item'>
                        <a href='void()' target='_blank'>帮助中心</a>
                    </div>
                </div>
            </header>
            <div className='lc-home-content'>
                <div className='lc-home-content-name'>JDh LCP</div>
                <div>基于低代码，页面快速搭建平台</div>
                <Button type='primary'>
                    <Link to='/work/canvas'>立即使用</Link>
                </Button>
            </div>
        </div>
    );
}

export default React.memo(Home);
