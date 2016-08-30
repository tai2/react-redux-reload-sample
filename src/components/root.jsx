import React, { Component, PropTypes } from 'react';
import NavBar from 'app/components/navbar.jsx';
import SelectContainer from 'app/containers/select_container.jsx';
import CheckoutContainer from 'app/containers/checkout_container.jsx';
import ThankYouContainer from 'app/containers/thankyou_container.jsx';

function Screen(props) {
    switch (props.step) {
    case 'select':
        return <SelectContainer/>;
    case 'checkout':
        return <CheckoutContainer/>;
    case 'thank-you':
        return <ThankYouContainer/>;
    default:
        return null;
    }
}
Screen.propTypes = {
    step: PropTypes.string.isRequired,
};

class Root extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar itemCount={this.props.itemCount}/>
                <div className="screen-container">
                    <Screen step={this.props.step}/>
                </div>
            </div>
        );
    }
}
Root.propTypes = {
    step: PropTypes.string.isRequired,
};

export default Root;
