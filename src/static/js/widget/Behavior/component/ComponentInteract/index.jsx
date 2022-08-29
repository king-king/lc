/*
 * Created by king at 2022-8-29 20:41:53
 * Copyright (c) 2022
 */

import React from 'react';
import Field from '../../Edit/Field';
import { validName } from '../../tools/check';

function ComponentInteract() {
    return (
        <div className='behavior-common-api'>
            <Field label='名称' type='input' valid={validName} name='name' />
        </div>
    );
}

ComponentInteract.propTypes = {
};
ComponentInteract.defaultProps = {
};
export default React.memo(ComponentInteract);
