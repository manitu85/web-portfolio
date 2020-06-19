import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
 
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentSheets()   // styled component
    const originalRenderPage = ctx.renderPage

    try {
      // wraps the collectStyles provider around our <App />.
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentSheet.collectStyles((<App {...props} />),
            ),
        })

      // extract the initial props that may be present.
      const initialProps = await Document.getInitialProps(ctx)

       // returning the original props together with our styled components.
      return {
        ...initialProps,
        styles: (
          <React.Fragment key='styles'>
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>
        ),
      }
    } catch(error) {
      // handle error
      console.error(error)
    
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags /*rendering the actually stylesheet*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}


export default MyDocument



