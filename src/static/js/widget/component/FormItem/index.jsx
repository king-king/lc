/*
 * Created by king at 2022-8-29 21:45:32
 * Copyright (c) 2022
 */
import React from 'react';
import PropTypes from 'prop-types';
import './style';

function FormItem({ label, children, valid }) {
    return (
        <div className='lc-form-item'>
            <div className='lc-form-item-content'>
                <div className='lc-form-item-content-label'>{label}</div>
                <div className='lc-form-item-content-item'>{children}</div>
            </div>
            <div className={`lc-form-item-valid ${valid ? 'show' : 'hide'}`}>{valid}</div>
        </div>
    );
}

FormItem.propTypes = {
    label: PropTypes.string,
    children: PropTypes.any,
    valid: PropTypes.string
};
FormItem.defaultProps = {
    label: '',
    children: '',
    valid: ''
};
export default React.memo(FormItem);
