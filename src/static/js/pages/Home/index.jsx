/*
 * Created by king at 2022-8-23 21:32:34
 * Copyright (c) 2022
 */

import React from 'react';
import './style';

function Home() {
    return (
        <div className='lc-home'>
            <header className='lc-home-header'>
                <div className='lc-home-logo'>logo</div>
                <div className='lc-home-control'>
                    <div className='lc-home-control-item'>控制台</div>
                    <div className='lc-home-control-item'>帮助中心</div>
                </div>
            </header>
        </div>
    );
}

export default React.memo(Home);
