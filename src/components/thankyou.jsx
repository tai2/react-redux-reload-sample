import React, { PropTypes } from 'react';

function ThankYou(props) {
    return (
        <div>
            <h1>Thank You!</h1>
            <p>We have sent an email with your receipt.</p>
            <button onClick={props.onTopClick}>Top page</button>
        </div>
    );
}
ThankYou.propTypes = {
    onTopClick: PropTypes.func.isRequired,
};

export default ThankYou;
