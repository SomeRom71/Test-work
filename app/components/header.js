import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

const options = [
  {
    label: 'Language',
    items: ['RU', 'EN', 'CN'],
  },
  {
    label: 'Currency',
    items: ['DOLLAR', 'EURO', 'ROUBLE'],
  },
];

class Header extends Component {
  renderDropdown = () => {
    return options.map((item) => {
      return (
        <div className="dropdown__item">
          <span>{ item.label }:</span>
          { /* eslint-disable-next-line */}
          <Dropdown options={item.items} onChange={this._onSelect} value={item.items[0]} placeholder="Select an option" />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="header">
        <div className="dropdown">
          { this.renderDropdown() }
        </div>
        <div className="header__menu">
          <ul className="header__menu__list">
            <li><a href="/">Contact us</a></li>
            <li><a href="/">Sign in</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
