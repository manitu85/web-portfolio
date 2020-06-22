import Link from 'next/link'
import {
  Root,
  Header,
  HeaderLink,
  Nav,
  Footer } from './layout.styles';


const Layout = ({ children, title }) => {
  return (
    <Root className="root">
        <Header>
          <Nav>
            <Link href="/">
              <HeaderLink>Home</HeaderLink>
            </Link>{' '}
            <Link href="/about">
              <HeaderLink>About</HeaderLink>
            </Link>{' '}
            <Link href="/portfolio">
              <HeaderLink>Portfolio</HeaderLink>
            </Link>{' '}
            <Link href="/blog">
              <HeaderLink>Blog</HeaderLink>
            </Link>{' '}
            <Link href="/contact">
              <HeaderLink>Contact</HeaderLink>
            </Link>{' '}
          </Nav>
        </Header>
      <h1>{title}</h1>
      {children}
      <Footer><p>Copyright&copy; Digital Genetics {new Date().getFullYear()}</p></Footer>
    </Root>
  )
}

export default Layout