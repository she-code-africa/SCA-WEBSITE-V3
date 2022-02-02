import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'

import Down from "./Down";
import logo from '../../images/she-code-africa-logo.svg'
import close from '../../images/cancel.svg'

import { paths } from '../../utils'

import useOutsideClickListener from '../../hooks/useOutsideClickListener'

const menus = [
  { name: 'home', to: paths.home, text: 'Home' },
  { name: 'about', to: paths.about, text: 'About' },
  { name: 'donate', to: paths.donate, text: 'Donate/Partner' },
  { name: 'chapters', to: paths.chapters, text: 'Chapters' },
  { name: 'programs', to: paths.programs, text: 'Programs', submenu: [
    { name: 'event', to: paths.events, text: 'Our Event'},
    { name: 'programs', to: paths.programs, text: 'Our Programs'},
  ] },
  { name: 'jobs', to: paths.jobs, text: 'Job Opportunities' },
]
const Header = ({ page }) => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState(false)

    const menuRef = useRef(null)


  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeSubMenu = () => {
    setSubMenuOpen(false)
  }

  useOutsideClickListener(menuRef, closeSubMenu)
  
  return (
    <header className="flex justify-between items-center py-5 px-8">
      <Link to={paths.home}>
        <img src={logo} alt="SCA Logo" className="object-contain __shecodelogo min-w-[48px]" />
      </Link>
      <ul className="md:flex justify-between hidden lg:text-[12px] md:text-[10px] xl:text-[15px] text-primary-dark-pink py-[10px] xl:px-[20px] md:px-[5px]">
        {menus.map((menu) => (
          <li key={menu.name} className={`lg:pr-12 md:pr-5 __shecodelink  ${page === menu.name ? 'active text-primary-main-pink' : ''}`}>
            {menu.submenu ?
              <div className="relative">
                <div className={`font-bold px-3 transition-all duration-[400s] tracking-[0.36px] flex items-center`} onClick={() => setSubMenuOpen(!subMenuOpen)} role="button" ref={menuRef}>
                  <p className="pr-3">{menu.text}</p>
                  <Down />
                </div>
                {subMenuOpen ?
                  <ul className="pt-4 absolute top-9 -left-5 -right-5 border border-gray-300 bg-white shadow-md">
                    {menu.submenu.map((child) => (
                      <li key={child.name} className={`pb-2 text-center ${page === child.name ? 'text-primary-main-pink' : 'text-primary-dark-pink'}`}>
                        <Link className={`no-underline font-bold px-3 block transition-all duration-[400s] tracking-[0.36px] ${page === child.name ? 'border-b border-primary-main-pink transform scale-105' : 'border-gray-400 border-opacity-20'}`} to={child.to}>{child.text}</Link>
                      </li>
                    ))}
                  </ul>
                  : ''}
              </div>
              : 
                <Link className={`no-underline font-bold block transition-all duration-[400s] tracking-[0.36px] ${page === menu.name?'text-primary-main-pink border-b-[3px] border-primary-main-pink transform scale-105':''}`} to={menu.to}>{menu.text}</Link>
             }
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <div className="bg-primary-main-pink min-h-10 w-12 rounded p-2" role="button" onClick={toggleMenu}>
          <span className="sr-only">Toggle navigation</span>
          <span className=" h-[2px] w-full block bg-white my-1"></span>
          <span className=" h-[2px] w-full block bg-white my-1"></span>
          <span className=" h-[2px] w-full block bg-white my-1"></span>
        </div>
      </div>
      {menuOpen && (
        <div className={`fixed bg-white top-0 bottom-0 left-0 right-0 h-screen p-8 animate__animated animate__faster animate__slideInRight z-50`}>
          <div className="text-right">
            <img src={close} alt="Close icon" className="inline transform scale-50" onClick={toggleMenu} />
          </div>
          <ul className="text-primary-dark-pink">
            {menus.map((menu) => (
              <li key={menu.name} className={`pb-5 pt-1 ${page === menu.name ? 'text-primary-main-pink' : ''}`}>
                {menu.submenu ?
                  <>
                    <div className={`font-bold px-3 transition-all duration-[400s] tracking-[0.36px] border-b border-gray-400 border-opacity-20 flex items-center`} onClick={() => setSubMenuOpen(!subMenuOpen)}>
                      <p className="pr-3">{menu.text}</p>
                      <Down />
                    </div>
                    {subMenuOpen ? 
                      <ul className="pt-4">
                        {menu.submenu.map((child) => (
                          <li key={child.name} className={`pl-3 pb-4 ${page === child.name ? 'text-primary-main-pink' : 'text-primary-dark-pink'}`}>
                            <Link className={`no-underline font-bold px-3 block transition-all duration-[400s] tracking-[0.36px] ${page === child.name ? 'border-b border-primary-main-pink transform scale-105' : 'border-gray-400 border-opacity-20'}`} to={child.to}>{child.text}</Link>
                          </li>
                        ))}
                      </ul>
                    : ''}
                  </>
                : 
                  <Link className={`no-underline font-bold px-3 block transition-all duration-[400s] tracking-[0.36px] border-b ${page === menu.name ? 'border-primary-main-pink transform scale-105' : 'border-gray-400 border-opacity-20'}`} to={menu.to}>{menu.text}</Link>
                }
              </li>
            ))}
          </ul>
        </div>
      )}
  </header>
  )
}

export default Header