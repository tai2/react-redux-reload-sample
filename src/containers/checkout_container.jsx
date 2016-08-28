import React from 'react';
import { connect } from 'react-redux';
import { goToSelect, goToThankYou, clearItems } from 'app/actions';
import { cartItems } from 'app/selectors';
import Checkout from 'app/components/checkout.jsx';

function mapStateToProps(state) {
    return {
        cartItems: cartItems(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onBackClick: () => {
            dispatch(goToSelect());
        },
        onOrderClick: (data) => {
            dispatch(clearItems());
            dispatch(goToThankYou());
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);
