import React from "react"
import App from "next/app"
import Head from "next/head"
import GlobalStyle from "../styles/globalStyle"
import { ThemeProvider } from "styled-components"
import { theme } from '../styles/theme'


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        {/* // next-seo */}
        <Head>
          <title>web portfolio | alex burke</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>

      </React.Fragment>
    )
  }
}

export default MyApp

