import Link from 'next/link'

const Layout = props => {

  const { children } = props

  return (
    <div>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

        {children}

      <footer>{'I`m here to stay'}</footer>
    </div>
  )
}

export default Layout