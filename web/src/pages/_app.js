import App from 'next/app'
import React, {Fragment } from 'react'

import globalStyles from '../styles/global';
import Page from '../components/Page';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
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