import App from 'next/app'
import React, {Fragment } from 'react'

import globalStyles from '../styles/global';
import Meta from '../components/Meta';
import Page from '../components/Page';

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/react-multi-carousel/lib/styles.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Meta />
        <Page>
          <Component {...pageProps} />
        </Page>
        <style jsx global>
          {globalStyles}
        </style>
      </Fragment>
    )
  }
}