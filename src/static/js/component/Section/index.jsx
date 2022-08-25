/*
 * Created by king at 2022-8-23 15:48:46
 * Copyright (c) 2022
 */

import React from 'react';
import PropTypes from 'prop-types';
import './style';

function Section({ children, className }) {
    return (
        <div className={`lc-section lc-section-${className}`}>
            {children}
        </div>
    );
}
Section.propTypes = {
    className: PropTypes.string
};
Section.defaultProps = {
    className: ''
};
export default React.memo(Section);
