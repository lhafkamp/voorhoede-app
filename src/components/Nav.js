import React from 'react'
import { Link } from 'react-router-dom'

import logoWithText from '../images/logo-with-text.svg'

const Nav = () => (
  <nav id="nav">
    <Link to="/">
      <img src={logoWithText} alt="Voorhoede logo" />
    </Link>
    <hr />
  </nav>
)

export default Nav
