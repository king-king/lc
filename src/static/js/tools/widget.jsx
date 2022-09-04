/*
 * Created by king at 2022-7-27 16:10:26
 * Copyright (c) 2022
 */

import React from 'react';
import { DATA_LC_PLOT, DATA_LC_PLOT_WIDGET_UUID } from '../config/index';

// plot指的是具体的render props
export const blockPlot = (parantUUID, plot, text = '槽位') => {
    const config = {
        [DATA_LC_PLOT]: plot,
        [DATA_LC_PLOT_WIDGET_UUID]: parantUUID,
        style: {
            lineHeight: '100px', height: '100px', color: 'gray', textAlign: 'center'
        }
    };
    return <div {...config}>{text}</div>;
};
