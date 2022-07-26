import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

class DomGetter extends React.Component {
    componentDidMount() {
        // eslint-disable-next-line
        this.props.onReady(findDOMNode(this));
    }
    shouldComponentUpdate() {
        return true;
    }
    render() {
        const Com = this.props.component;
        return (
            <Com {...this.props.config}>
                {this.props.children}
            </Com>
        );
    }
}
DomGetter.propTypes = {
    onReady: PropTypes.func.isRequired,
    config: PropTypes.object.isRequired,
    component: PropTypes.elementType.isRequired
};
export default DomGetter;
