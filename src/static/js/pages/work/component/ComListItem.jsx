import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { bubble } from '../../../tools/dom';
import { add } from '../../../redux/slice/vtree';

function ComListItem({ name }) {
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
            function move(me) {
                x = me.pageX - 25;
                y = me.pageY - 10;
                shadow.style.setProperty('left', `${x}px`);
                shadow.style.setProperty('top', `${y}px`);
            }
            const mouseUp = ue => {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', mouseUp);
                document.body.removeChild(shadow);
                // 只能落在画布的范围内
                let isInCavans = false;
                bubble(ue.target, dom => {
                    if (dom.dataset.id === 'lc-work-ground-component-canvas') {
                        isInCavans = true;
                        return true;
                    }
                    return false;
                });
                if (isInCavans) {
                    // 借助状态管理更新组件树
                    // TODO:此处是初始版本，我们添加的是一个通用的组件，实际上应该是拖拽了哪个就添加哪个
                    dispatch(add());
                }
            };
            document.addEventListener('mouseup', mouseUp);
            document.addEventListener('mousemove', move);
        }
        inputEl.current.addEventListener('mousedown', downMove);
    }, []);
    return (
        <div ref={inputEl} className='lc-work-ground-component-item'>{name}</div>
    );
}

ComListItem.propTypes = {
    name: PropTypes.string.isRequired
};

export default React.memo(ComListItem);
