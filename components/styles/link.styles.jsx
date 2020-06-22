import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: darkgrey;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: lightgrey;
  }

  &:focus {
    color: darkgrey;
    outline: none;
    border: 0;
  }
`

// Usage
// import StyledLink from '../components/styles/StyledLink'

//  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
//    First post
//  </StyledLink>