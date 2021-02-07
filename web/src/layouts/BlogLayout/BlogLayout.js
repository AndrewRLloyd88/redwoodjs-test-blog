import { Link, routes } from '@redwoodjs/router'
import {useAuth} from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const {logIn, isAuthenticated, logOut, currentUser} = useAuth()
  return (
    <>
      <h1>
        <Link to={routes.home()}>Redwood Blog</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
          <li>
            <a href="#" onClick={isAuthenticated ? logOut : logIn }>{isAuthenticated ? "Log out" : "Log in" }</a>
          </li>
          {isAuthenticated &&
          <li>
          Logged in as {currentUser.email}
          </li>
          }
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
