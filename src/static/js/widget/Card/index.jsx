import React from 'react';
import './style.scss';

function Card() {
    return (
        <div className='card-com'>这是一个实心的卡片</div>
    );
}

Card.propTypes = {
};
Card.defaultProps = {
};
export default {
    component: React.memo(Card),
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: {

    }
};
