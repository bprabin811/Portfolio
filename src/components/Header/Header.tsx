import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import logo from '../../assets/favicon.png'
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

import { MdLight } from "react-icons/md";
import { MdOutlineLight } from "react-icons/md";
import ArrowTooltip from '../Utils/tooltip'





export function Header() {
  const [isActive, setActive] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  function toggleTheme() {
    setDarkMode(!darkMode)
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <img src={logo} alt="" style={{width:"40px",height:"40px"}}/>
        </HashLink>
        <div onClick={toggleTheme} style={{cursor:"pointer"}}>
          {darkMode?
          <ArrowTooltip title="Light Mode">
            <MdLight style={{fontSize:"2rem",color:"#EB7E11"}}/>
          </ArrowTooltip>
          :
          <ArrowTooltip title="Dark Mode">
            <MdOutlineLight style={{fontSize:"2rem"}}/>
          </ArrowTooltip>
          
          }
        </div>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          {/* <a href={Resume} download className="button">
            Email
          </a> */}
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
