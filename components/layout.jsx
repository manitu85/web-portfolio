import Link from 'next/link'
import styled from 'styled-components'


const Container = styled.div`
  width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
  /* background: #f2f2f2; */
`

const Layout = ({ children, title }) => {
  return (
    <div className="root">
        <header>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{' '}
            <Link href="/about">
              <a>About</a>
            </Link>{' '}
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </nav>
        </header>

    
      <h2>{title}</h2>
      {children}

      <footer><p>Copyright&copy; Digital Genetics {new Date().getFullYear()}</p></footer>

      <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1rem;
        background: indigo;
        text-transform: uppercase;
      }
      header nav {
        display: flex;
        justify-content: space-around;
        width: 50%;
      }

      header a {
        color: darkgrey;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: lightgrey;
      }
      footer {
        padding: 1em;
      }
    `}</style>
    </div>
  )
}

export default Layout