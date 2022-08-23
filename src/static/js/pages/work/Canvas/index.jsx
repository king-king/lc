import React from 'react';
import { widgetList } from '../../../widget/index';
import ComListItem from './component/ComListItem';
import Layout from './component/Layout';
import Edit from './component/Edit';
import './style/style.scss';

function Work() {
    return (
        <div className='lc-work-ground-canvas'>
            {/* 组件列表 */}
            <div className='lc-work-ground-component-list' data-id='lc-work-ground-component-list'>
                {widgetList.map(widget => <ComListItem key={widget.name} widget={{ ...widget }} />)}
            </div>
            {/* 中间内容绘制区域 */}
            <Layout />
            {/* 组件配置 */}
            <div className='lc-work-ground-component-config' data-id='lc-work-ground-component-config'>
                <Edit />
            </div>
        </div>
    );
}

export default React.memo(Work);
