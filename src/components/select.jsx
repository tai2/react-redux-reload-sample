import React, { PropTypes } from 'react';
import items from 'app/items';

function Item(props) {
    return (
        <div className="item" onClick={props.onItemClick.bind(this, props.item.id)}>
            <div><img src={props.item.image}/></div>
            <div><span className="title-label">Title:</span> {props.item.title}</div>
            <div><span className="price-label">Price:</span> ￥{props.item.price}</div>
        </div>
    );
}
Item.propTypes = {
    item: PropTypes.object.isRequired,
    onItemClick: PropTypes.func.isRequired,
};

function Select(props) {
    return (
        <div>
            <h1>Click to Add Items</h1>
            {props.addedItemId &&
                <p className="message">{`1 item added. ${items[props.addedItemId].title} x 1 ￥${items[props.addedItemId].price}`}</p>}
            <div className="items">
                {Object.values(items).map(item => <Item key={item.id} item={item} onItemClick={props.onItemClick}/>)}
            </div>
            <button onClick={props.onCheckoutClick}>Checkout</button>
        </div>
    );
}
Select.propTypes = {
    addedItemId: PropTypes.number,
    onItemClick: PropTypes.func.isRequired,
    onCheckoutClick: PropTypes.func.isRequired,
};

export default Select;
