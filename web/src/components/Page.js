import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class Page extends Component {
  render() {
    return (
        <div className="container">
            <NavBar />
            <div >{this.props.children}</div>
            <Footer />
        </div>
     
    );
  }
}

export default Page;
