import React from 'react';
import { connect } from 'react-redux';
import { goToSelect } from 'app/actions';
import ThankYou from 'app/components/thankyou.jsx';

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onTopClick: () => {
            dispatch(goToSelect());
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThankYou);
