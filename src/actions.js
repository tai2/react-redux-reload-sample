import { createAction } from 'redux-actions';

export const goToSelect = createAction('GO_TO_SELECT');
export const goToCheckout = createAction('GO_TO_CHECKOUT');
export const goToThankYou = createAction('GO_TO_THANK_YOU');
export const addItem = createAction('ADD_ITEM');
export const clearItems = createAction('CLEAR_ITEMS');
