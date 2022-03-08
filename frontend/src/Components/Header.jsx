import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to = '/'>
          MyDreams
          </Link>
        </div>
        <ul>
          <li>
            <Link to = '/login'>
              <FaSignOutAlt /> Login
              </Link>
          </li>
          <li>
            <Link to = '/register'>
              <FaUserAlt /> Register
              </Link>
          </li>
        </ul>
      </header>
  )
}

export default Header