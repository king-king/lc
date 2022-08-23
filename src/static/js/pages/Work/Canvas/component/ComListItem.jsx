import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
    isInCavans, element, highlightDropshadow, getWidgetOrPlot, getPositionInfo
} from '../../../../tools/dom';
import { add } from '../../../../redux/slice/vtree';
import { melon } from '../../../../tools/melon';
import { DATA_LC_WIDGET_UUID_KEY, DATA_LC_PLOT_KEY, DATA_LC_PLOT_WIDGET_UUID_KEY } from '../../../../config/index';

function ComListItem({ widget }) {
    const inputEl = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        function downMove(e) {
            // NOTE:这里有知识点，如何获取页面元素的位置，以及定位影子元素
            let x = e.pageX - 25;
            let y = e.pageY - 10;
            const shadow = document.createElement('div');
            shadow.className = 'component-shadow-item';
            document.body.appendChild(shadow);
            shadow.style.setProperty('left', `${x}px`);
            shadow.style.setProperty('top', `${y}px`);
            // 创建可落子的影子dom
            const dropShadow = element('div', {
                css: {
                    position: 'absolute',
                    'background-color': 'rgba(255,0,0,0.2)'
                }
            });
            // 用于高亮的画布
            const highlightCanvas = element('div', {
                className: 'lc-plot-canvas',
                css: {
                    'pointer-events': 'none',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                },
                children: [dropShadow.el]
            }, document.body);
            function move(me) {
                // 监听移动
                x = me.pageX - 25;
                y = me.pageY - 10;
                shadow.style.setProperty('left', `${x}px`);
                shadow.style.setProperty('top', `${y}px`);
                // 需要将可以"落子"的地方高亮
                highlightDropshadow(dropShadow.el, me);
            }
            const mouseUp = ue => {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', mouseUp);
                document.body.removeChild(shadow);
                // 只能落在画布的范围内
                if (isInCavans(ue.target)) {
                    // 获取当前落点位置
                    const { el, type } = getWidgetOrPlot(ue.target);
                    const payload = { type, melon: melon({ x: ue.pageX, y: ue.pageY, widget }) };
                    if (type === 'widget') {
                        // 落在了组件上
                        // 需要指明组件uuid
                        const {
                            left, top, width, height
                        } = el.getBoundingClientRect();
                        payload.widgetUUID = el.dataset[DATA_LC_WIDGET_UUID_KEY];
                        payload.position = getPositionInfo(ue.clientX, ue.clientY, left, top, width, height).position;
                    } else if (type === 'plot') {
                        // 落在了槽位上
                        payload.parentUUID = el.dataset[DATA_LC_PLOT_WIDGET_UUID_KEY];
                        payload.targetPlot = el.dataset[DATA_LC_PLOT_KEY];
                    } else {
                        // 落在了画布上
                        payload.type = 'canvas';
                    }
                    dispatch(add(payload));
                }
                highlightCanvas.remove();
            };
            document.addEventListener('mouseup', mouseUp);
            document.addEventListener('mousemove', move);
        }
        inputEl.current.addEventListener('mousedown', downMove);
        // eslint-disable-next-line
    }, []);
    return (
        <div ref={inputEl} className='lc-work-ground-component-item'>{widget.name}</div>
    );
}

ComListItem.propTypes = {
    // eslint-disable-next-line
    widget: PropTypes.object.isRequired
};

export default React.memo(ComListItem);
