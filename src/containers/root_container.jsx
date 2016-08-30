import React from 'react';
import { connect } from 'react-redux';
import Root from 'app/components/root.jsx';

function mapStateToProps(state) {
    return {
        step: state.step,
        itemCount: state.cart.length,
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
