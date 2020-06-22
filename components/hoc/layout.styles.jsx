import styled from 'styled-components'


export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1em;
  font-size: 1.8rem;
  background: indigo;
  text-transform: uppercase;
`

export const HeaderLink = styled.a`
  color: darkgrey;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: lightgrey;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 50%;
`

export const Footer = styled.footer`
   padding: 1em;
`