import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import Men from './men';
import Women from './women';
import Sale from './sale';
import Blog from './blog';
import Contacts from './contacts';

class SectionTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  menuHandle = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <Router>
        <div>
          <nav className="menu">
            <span onClick={this.menuHandle} onBlur={this.menuHandle} onKeyPress role="button" tabIndex={0} className="menu__open-link"><img src={require('../assets/images/menu.svg')} alt="search" /> Menu</span>
            <ul className={menuOpen ? 'menu__list menu__opened' : 'menu__list'}>
              <li className="menu__item"><Link to="/">Home</Link></li>
              <li className="menu__item"><Link to="/men">Men</Link></li>
              <li className="menu__item"><Link to="/women">Women</Link></li>
              <li className="menu__item"><Link to="/sale">Sale</Link></li>
              <li className="menu__item"><Link to="/blog">Blog</Link></li>
              <li className="menu__item"><Link to="/contacts">Contacts</Link></li>
            </ul>
          </nav>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/men" component={Men} />
            <Route exact path="/women" component={Women} />
            <Route exact path="/sale" component={Sale} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contacts" component={Contacts} />
          </div>
        </div>
      </Router>
    );
  }
}

export default SectionTabs;
