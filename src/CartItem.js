import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }

  render () {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>Phone</div>
          <div style={ { color: '#777' } }>Rs 999</div>
          <div style={ { color: '#777' } }>Qty: 1</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
            <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
            <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3687/premium/3687412.png?token=exp=1647628420~hmac=3baf762fdc2d215e4448b058a2de5cde" />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;