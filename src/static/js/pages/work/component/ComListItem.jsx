import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function ComListItem({ name }) {
    const inputEl = useRef(null);
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
                console.log(me.target);
                x = me.pageX - 25;
                y = me.pageY - 10;
                shadow.style.setProperty('left', `${x}px`);
                shadow.style.setProperty('top', `${y}px`);
            }
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', move);
            });
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
