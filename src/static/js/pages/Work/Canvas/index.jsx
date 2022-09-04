import React from 'react';
import { Collapse } from 'antd';
import { widgetList } from '../../../widget/Material';
import ComListItem from './component/ComListItem';
import Layout from './component/Layout';
import Edit from './component/Edit';
import './style/style.scss';

const { Panel } = Collapse;

function Work() {
    return (
        <div className='lc-work-ground-canvas'>
            {/* 组件列表 */}
            <div className='lc-work-ground-component-list' data-id='lc-work-ground-component-list'>
                <Collapse defaultActiveKey={widgetList.map(item => item.type)} expandIconPosition='end'>
                    {
                        widgetList.map(team => (
                            <Panel key={team.type} header={team.name} className='lc-work-ground-component-list-panel'>
                                {team.children.map(widget => <ComListItem key={widget.name} widget={{ ...widget }} />)}
                            </Panel>
                        ))
                    }
                </Collapse>
                {/* {widgetList.map(widget => <ComListItem key={widget.name} widget={{ ...widget }} />)} */}
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
