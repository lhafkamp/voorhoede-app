import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import logoWithText from '../images/logo-with-text.svg'

const Nav = () => (
  <nav id="nav">
    <Link to="/">
      <img src={logoWithText} alt="Voorhoede logo" />
    </Link>
    <ul>
      <li><NavLink to="/cases">Cases</NavLink></li>
    </ul>
    <hr />
  </nav>
)

export default Nav
