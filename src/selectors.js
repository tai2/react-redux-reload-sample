import items from 'app/items';

export function cartItems(state) {
    const result = {};
    for (let itemId of state.cart) {
        if (result[itemId]) {
            result[itemId].count++;
        } else {
            result[itemId] = Object.assign({}, items[itemId], {count: 1});
        }
    }
    return result;
}
