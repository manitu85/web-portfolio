import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/globalStyle'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { theme } from '../styles/theme'
import themeMui from '../styles/themeMui'


class MyApp extends App {

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        {/* next-seo */}
        <Head>
          <title>web portfolio</title>
          {/* PWA primary color */}
          {/* <meta name="theme-color" content={theme.color.primary} /> */}
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta
            name='description'
            content='A site for my programming portfolio'
          />
          <meta charSet='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <meta name='viewport' content='width=device-width' />
          <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap' rel='stylesheet' />
        </Head>

        {/* Wrappers */}
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
          <MaterialThemeProvider theme={themeMui}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </MaterialThemeProvider>
        </StyledThemeProvider>

      </React.Fragment>
    )
  }
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};