/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style';

function Header() {
    return (
        <header className='lc-header'>
            <div>
                <Link to='/manage/page/list'>
                    <div className='icon-logo' />
                </Link>
            </div>
        </header>
    );
}
Header.propTypes = {
};
Header.defaultProps = {
};
export default React.memo(Header);
