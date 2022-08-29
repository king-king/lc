import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Card({ onClick }) {
    return (
        <div className='card-com' onClick={onClick}>这是一个实心的卡片</div>
    );
}

Card.propTypes = {
    onClick: PropTypes.func
};
Card.defaultProps = {
    onClick: () => { }
};
export default {
    component: React.memo(Card),
    // 声明可以触发的事件
    event: [{
        name: '点击',
        props: 'onClick'
    }],
    plots: {
    },
    // 可以配置的props，用于渲染右侧的编辑栏
    editProps: []
};
