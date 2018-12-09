import React, { Component } from 'react';
import Search from './search';
import Basket from './basket';
import SectionTabs from './sectiontabs';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="main">
          <Search />
          <a className="logo" href="/"><img src={require('../assets/images/logo.png')} alt="search" /></a>
          <Basket />
        </div>
        <SectionTabs />
      </div>
    );
  }
}

export default Header;
