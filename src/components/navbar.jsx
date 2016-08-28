import React, { PropTypes } from 'react';

function message(itemCount) {
    if (itemCount === 0) {
        return 'no item in the cart'
    } else if (itemCount === 1) {
        return '1 item in the cart'
    } else {
        return `${itemCount} items in the cart`
    }
}

function NavBar(props) {
    return (
        <div className="navbar">{message(props.itemCount)}</div>
    );
}
NavBar.propTypes = {
    itemCount: PropTypes.number.isRequired,
};

export default NavBar;
