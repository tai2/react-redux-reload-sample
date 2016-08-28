import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createValidator, required, email } from 'app/lib/validation';

export function totalPrice(cartItems) {
    return Object.values(cartItems)
                 .map(item => item.price * item.count)
                 .reduce((prev, curr) => prev + curr, 0);
}

function Cart(props) {
    return (
        <div>
            <ul>
                {Object.values(props.cartItems).map(item => <li key={item.id}>{item.title} x {item.count}</li>)}
            </ul>
            <div><span className="total-label">Total:</span> ￥{totalPrice(props.cartItems)}</div>
        </div>
    );
}

function renderField(props) {
    return (
        <div>
            <label>{props.label}<input {...props.input} type={props.type}/></label>
            {props.meta.touched && props.meta.error && <span className="error">{props.meta.error}</span>}
        </div>
    );
}
let CheckoutForm = (props) => {
    return (
        <div>
            <Field name="name" label="Name:" type="text" component={renderField}/>
            <Field name="email" label="Email:" type="text" component={renderField}/>
            <Field name="postalCode" label="Postal code:" type="text" component={renderField}/>
            <Field name="address" label="Address:" type="text" component={renderField}/>
            <button onClick={props.handleSubmit}>Order</button>
        </div>
    );
};
const validate = createValidator({
    name: [required],
    email: [required, email],
    postalCode: [required],
    address: [required],
});
CheckoutForm = reduxForm({
    form: 'checkout',
    validate,
})(CheckoutForm);

function Checkout(props) {
    return (
        <div>
            <h1>Cart</h1>
            <Cart cartItems={props.cartItems}/>
            <h1>Destination</h1>
            <CheckoutForm onSubmit={props.onOrderClick}/>
            <button onClick={props.onBackClick}>Back</button>
        </div>
    );
}

Checkout.propTypes = {
    cartItems: PropTypes.object.isRequired,
    onBackClick: PropTypes.func.isRequired,
    onOrderClick: PropTypes.func.isRequired,
};

export default Checkout;
