import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { widgetList } from '../../../widget/index';
import DomGetter from './DomGetter';

function Canvas() {
    const vtree = useSelector(state => state.vtree.value);
    return (
        <div className='lc-work-ground-component-canvas' data-id='lc-work-ground-component-canvas'>
            {vtree.map(({
                x, y, uuid, widget
            }) => {
                const config = {
                    key: uuid,
                    x,
                    y
                };
                const onReady = dom => {
                    dom.setAttribute('data-lc-widget-uuid', uuid);
                };
                const Component = widgetList[widget.component];
                const dom = <Component {...config} />;
                return <DomGetter key={uuid} component={dom} onReady={onReady} />;
            })}
        </div>
    );
}

Canvas.propTypes = {
};

export default React.memo(Canvas);
