import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onOrder = () => {
    let orderCounter = localStorage.getItem('orders');
    orderCounter = Number(orderCounter) + 1;
    localStorage.setItem('orders', orderCounter);
  }

  render() {
    return (
      <div className="item">
        { /* eslint-disable-next-line */ }
        <div className="item__title">{this.props.name}</div>
        <button onClick={this.onOrder} type="button" className="item__button">Buy</button>
      </div>
    );
  }
}

export default Product;
