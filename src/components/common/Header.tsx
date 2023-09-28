import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

const Header: React.FC = () => (
  <nav className="header-wrapper">
    <div className="nav-wrapper px1 brand-head">
      <NavLink to="/" className="brand-logo" style={{ backgroundImage: 'url("./icons/pfizer_logo.png")' }}>&nbsp;
      </NavLink>
    </div>
  </nav >
)

export default Header;
