import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../images/she-code-africa-logo.svg'

import { paths } from '../../utils'
const Header = () => {
  
  return (
    <header className="flex justify-between md:p-4 py-2 px-3 items-center">
      <Link to={paths.home}>
        <img src={logo} alt="SCA Logo" className="object-contain w-14" />
      </Link>
      <ul className="md:flex justify-between hidden">
        <li><Link to={paths.home}>Home</Link></li>
        <li><Link to={paths.about}>About</Link></li>
        <li><Link to={paths.donate}>Donate/Partner</Link></li>
        <li><Link to={paths.chapters}>Chapters</Link></li>
        <li><Link to={paths.programs}>Programs</Link></li>
        <li><Link to={paths.jobs}>Job Opportunities</Link></li>
      </ul>
      <div className="md:hidden">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
  </header>
  )
}

export default Header