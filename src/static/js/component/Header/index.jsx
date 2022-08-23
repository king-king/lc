/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './style';

function Header({ back }) {
    return (
        <header className='lc-header'>
            <div>
                {back?.length ? (
                    <Link to={back}>
                        <LeftOutlined />
                        返回
                    </Link>
                ) : null}
            </div>
        </header>
    );
}
Header.propTypes = {
    back: PropTypes.string
};
Header.defaultProps = {
    back: ''
};
export default React.memo(Header);
