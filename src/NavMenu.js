import {
  Link
} from "react-router-dom";

export default function NavMenu()
{
  return (
    <nav className="NavMenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
          </nav>
  )
}