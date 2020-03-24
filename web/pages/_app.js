import React from 'react';
import App from 'next/app';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "node-fetch";
global.fetch = require('node-fetch');
import Page from "../components/Wrappers/Page";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    const client = new ApolloClient({
      // request: (operation) => {
      //   const token = localStorage.getItem('token')
      //   operation.setContext({
      //     headers: {
      //       authorization: token ? token : ''
      //     }
      //   })
      // },
      uri: "/graphql",
      fetch: fetch,
      cache: new InMemoryCache()
    });

    return (
      <React.Fragment>
         <ApolloProvider client={client}>
         <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </React.Fragment>
    );
  }
}

