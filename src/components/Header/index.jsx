import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../images/she-code-africa-logo.svg'

import { paths } from '../../utils'

const menus = [
  { name: 'home', to: paths.home, text: 'Home' },
  { name: 'about', to: paths.about, text: 'About' },
  { name: 'donate', to: paths.donate, text: 'Donate/Partner' },
  { name: 'chapters', to: paths.chapters, text: 'Chapters' },
  { name: 'programs', to: paths.programs, text: 'Programs', submenu: [] },
  { name: 'jobs', to: paths.jobs, text: 'Job Opportunities' },
]
const Header = ({ page }) => {
  
  return (
    <header className="flex justify-between items-center py-5 px-8">
      <Link to={paths.home} className="block">
        <img src={logo} alt="SCA Logo" className="object-contain w-14" />
      </Link>
      <ul className="md:flex justify-between hidden text-[15px] text-primary-dark-pink py-[10px] px-[20px]">
        {menus.map((menu) => (
          <li key={menu.name} className={`pr-12 __shecodelink ${page === menu.name ? 'active' : ''}`}><Link className={`no-underline font-bold block transition-all duration-[400s] tracking-[0.36px] ${page === menu.name?'text-primary-main-pink border-b-[3px] border-primary-main-pink transform scale-105':''}`} to={menu.to}>{menu.text}</Link></li>
        ))}
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