import React, { Component } from 'react';
import Navbar from './Navbar';
import Logo from './logo_hancock.jpg';

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light container-fluid">
        <a href="/" className = "navbar-brand mr-auto"><img alt="logo" className="img-fluid" src={Logo} width ={"100px"} height = {"50px"}/></a>
        <Navbar />
      </header>
    );
  }
}

export default Header;