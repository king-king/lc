import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isInCavans, getWidgetUUID, element } from '../../../tools/dom';
import { add } from '../../../redux/slice/vtree';
import { melon } from '../../../tools/melon';

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
            // 创建槽位的影子dom
            const plotShadow = element('div', {
                position: 'absoulte',
                backgroundColor: 'rgba(255,0,0,0.2)'
            });
            const plotCanvas = element('div', {
                className: 'lc-plot-canvas',
                css: {
                    'pointer-events': 'none',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                },
                children: [plotShadow.el]
            }, document.body);
            function move(me) {
                // 监听移动
                x = me.pageX - 25;
                y = me.pageY - 10;
                shadow.style.setProperty('left', `${x}px`);
                shadow.style.setProperty('top', `${y}px`);
                // 查找可用的槽位或组件
            }
            const mouseUp = ue => {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', mouseUp);
                document.body.removeChild(shadow);
                // 只能落在画布的范围内
                if (isInCavans(ue.target)) {
                    const { parentUUID, targetPlot } = getWidgetUUID(ue.target);
                    dispatch(add({
                        ...melon({
                            x: ue.pageX, y: ue.pageY, widget, parentUUID
                        }),
                        targetPlot
                    }));
                }
                plotCanvas.remove();
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
