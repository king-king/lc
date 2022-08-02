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
    }
};
