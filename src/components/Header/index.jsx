import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../images/she-code-africa-logo.svg'

const Header = () => {
  
  return (
    <header className="flex">
    <Link to="/">
      <img src={logo} alt="SCA Logo" />
    </Link>
      <ul>
  heyyy
      </ul>
  </header>
  )
}

export default Header