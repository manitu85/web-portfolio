import React from "react"
import App from "next/app"
import Head from "next/head"
import GlobalStyle from "../styles/globalStyle"
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { theme } from '../styles/theme'


const themeMui = {
  primary: '#f2f2f2',
  ...createMuiTheme()
}

class MyApp extends App {

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        {/* // next-seo */}
        <Head>
          <title>web portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="A site for my programming portfolio"
          />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
        </Head>

        <StyledThemeProvider theme={theme}>
          <MaterialThemeProvider theme={themeMui}>
            <Component {...pageProps} />
          </MaterialThemeProvider>
        </StyledThemeProvider>

      </React.Fragment>
    )
  }
}

export default MyApp

