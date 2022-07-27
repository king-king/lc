/*
 * Created by king at 2022-7-27 16:10:26
 * Copyright (c) 2022
 */
import React from 'react';

// plot指的是具体的render props
export const blockPlot = (parantUUID, plot) => <div data-lc-plot={plot} data-lc-parent-wrapper-uuid={parantUUID} style={{ height: '100%' }} />;
