import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './NavBar';
import Meta from './Meta';
import { GlobalStyle } from '../../theme/styles';
import { theme } from '../../theme/theme';

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle /> 
          <Meta />
          <NavBar />
          <div className="container">{this.props.children}</div>
      </ThemeProvider>
    );
  }
}

export default Page;
