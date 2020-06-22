// import Link from 'next/link'
import StyledLink from '../styles/link.styles'
import {
  Root,
  Header,
  HeaderLink,
  Nav,
  Footer
} from './layout.styles';


const Layout = ({ children, title }) => {
  return (
    <Root className="root">
      <Header>
        <Nav>
          <StyledLink href="/">Home</StyledLink>{' '}
          <StyledLink href="/about">About</StyledLink>{' '}
          <StyledLink href="/portfolio">Portfolio</StyledLink>{' '}
          <StyledLink href="/blog">Blog</StyledLink>{' '}
          <StyledLink href="/contact">Contact</StyledLink>
        </Nav>
      </Header>
      <h1>{title}</h1>
      {children}
      <Footer><p>Copyright&copy; Digital Genetics {new Date().getFullYear()}</p></Footer>
    </Root>
  )
}

export default Layout