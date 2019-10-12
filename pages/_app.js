import React from 'react'
import App, { Container } from 'next/app'
import { RouterContextProvider } from '../hooks/useRouter'
import { PageTransition } from '../components/utils/page-transition'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component: SsrComponent, pageProps: ssrPageProps } = this.props

    return (
      <Container>
        <RouterContextProvider>
          <PageTransition>
            {({ Component, pageProps }) => {
              return Component ? (
                <Component {...pageProps} />
              ) : (
                <SsrComponent {...ssrPageProps} />
              )
            }}
          </PageTransition>
        </RouterContextProvider>
      </Container>
    )
  }
}
