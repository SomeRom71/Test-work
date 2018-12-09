import React, { Component } from 'react';
import Product from './product';

class Men extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Men!</h1>
        <br />
        <Product name="Shoes" />
      </div>
    );
  }
}

export default Men;
