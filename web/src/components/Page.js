import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import { Container } from './styles/Common';

class Page extends Component {
  render() {
    return (
        <div className="container">
              <NavBar />
              <div >{this.props.children}</div>
        
        </div>
     
    );
  }
}

export default Page;
