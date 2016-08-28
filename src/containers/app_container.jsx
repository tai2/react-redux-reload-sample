import React from 'react';
import { connect } from 'react-redux';
import App from 'app/components/app.jsx';

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
)(App);
