import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
    };
  }

  searchVisible = (value) => {
    this.inputSearch.focus();
    this.setState({ isCollapsed: value });
  }

  render() {
    const { isCollapsed } = this.state;
    return (
      <div onClick={() => this.searchVisible(true)} role="button" tabIndex="0" onKeyPress onBlur={() => this.searchVisible(false)} className={isCollapsed ? 'search opened' : 'search'}>
        <img src={require('../assets/images/search.png')} alt="search" />
        <form>
          <input ref={(input) => { this.inputSearch = input; }} className="search__input" type="text" />
        </form>
      </div>
    );
  }
}

export default Search;
