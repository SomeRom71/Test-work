import React, { Component } from 'react';

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: localStorage.getItem('orders'),
    };
  }

  render() {
    const { orders } = this.state;
    return (
      <div className="basket">
        <div className="basket__wrapp">
          <img src={require('../assets/images/basket.png')} alt="search" />
          <span className="basket__count">
            {orders}
          </span>
        </div>
      </div>
    );
  }
}

export default Basket;
