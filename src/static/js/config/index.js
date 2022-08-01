/*
 * Created by king at 2022-8-1 22:03:05
 * Copyright (c) 2022
 */

// 标记画布，表示到达了画布的最底层
export const LC_WORK_GROUND_COMPONENT_CANVAS = 'lc-work-ground-component-canvas';

// 标记组件的uuid，凡是组件都有该属性，该属性可以用来判断是否是组件以及组件的uuid
export const DATA_LC_WIDGET_UUID = 'data-lc-widget-uuid';
export const DATA_LC_WIDGET_UUID_KEY = 'lcWidgetUuid';

// 有且仅有plot会有该属性，且该属性值是plot
export const DATA_LC_PLOT = 'data-lc-plot';
export const DATA_LC_PLOT_KEY = 'lcPlot';

// 有且仅有plot会有该属性，且该属性值是拥有该plot的组件id
export const DATA_LC_PLOT_WIDGET_UUID = 'data-lc-plot-widget-uuid';
export const DATA_LC_PLOT_WIDGET_UUID_KEY = 'lcPlotWidgetUuid';
