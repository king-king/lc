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
        return (
            <>
                {this.props.component}
            </>
        );
    }
}
DomGetter.propTypes = {
    onReady: PropTypes.func.isRequired,
    component: PropTypes.node.isRequired
};
export default DomGetter;
