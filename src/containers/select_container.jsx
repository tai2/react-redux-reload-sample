import React from 'react';
import { connect } from 'react-redux';
import { addItem, goToCheckout } from 'app/actions';
import Select from 'app/components/select.jsx';

function mapStateToProps(state) {
    return {
        addedItemId: state.addedItemId,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onItemClick: (itemId) => {
            dispatch(addItem({itemId}));
        },
        onCheckoutClick: () => {
            dispatch(goToCheckout());
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Select);
