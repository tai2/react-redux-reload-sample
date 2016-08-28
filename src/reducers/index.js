import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';
import * as actions from 'app/actions'
import { reducer as form } from 'redux-form'

const step = handleActions({
    [actions.goToSelect]: (step, action) => 'select',
    [actions.goToCheckout]: (step, action) => 'checkout',
    [actions.goToThankYou]: (step, action) => 'thank-you',
}, 'select');

const cart = handleActions({
    [actions.addItem]: (cart, action) => [...cart, action.payload.itemId],
    [actions.clearItems]: (cart, action) => [],
}, []);

const addedItemId = handleActions({
    [actions.addItem]: (addedItemId, action) => action.payload.itemId,
    [actions.goToCheckout]: (addedItemId, action) => null,
}, null);

export default combineReducers({
    step,
    cart,
    addedItemId,
    form,
});
