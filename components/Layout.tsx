import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from './Navbar/Navbar'
import { Container } from 'react-bootstrap'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Container fluid>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    {children}
    <footer>
      <hr />
      <span>CATS APP FOOTER (Footer)</span>
    </footer>
  </Container>

)

export default Layout
