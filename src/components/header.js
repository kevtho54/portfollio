import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import cv from "../assets/CV_internet.pdf"
import style from"../style/header.module.css"
import linkedin from "../assets/Linkedin.png"
import logoMenu from "../assets/menu.png"



function Header({scrollToContact, scrollToProject, scrollToExperience}){

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const closeMenu = () =>{
    setMenuVisible(false)
  }
   
    
    return(
    <header className={style.header} >
        <div className={style.contenerImg}>
          <a
              href="https://www.linkedin.com/in/kevin-thomassin-6589b41a8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={style.imgHeader}
                src={linkedin}
                alt="profil linkedin"
              />
            </a>
            <p className={style.txt_linkedin}>Rejoignez moi sur Linkedin</p>
            </div>
           
            
            <div className={menuVisible ? `${style.nav_ul} ${style.mobileMenu}` : style.nav_ul}>
        <nav className={style.nav}>
            <ul className={style.nav_ul}>
                <li><a className={style.nav_a} href={cv} download="CV Kévin Thomassin.pdf">Mon CV</a></li>
                <NavLink to="" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" }); closeMenu()}} className={style.nav_a} > Accueil </NavLink>
                <NavLink href="#" className={style.nav_a}  onClick={() => { scrollToExperience() ; closeMenu()}} > Experience Technologique </NavLink>
                <NavLink href="#" className={style.nav_a}  onClick={() => {scrollToProject() ; closeMenu()}} > Mes Projets </NavLink>
                <NavLink href="#" className={style.nav_a}  onClick={() => {scrollToContact() ; closeMenu()}} > Contact </NavLink>
            </ul>
        </nav>
        
        </div>

        <img className={style.logoMenu} src={logoMenu} alt="logo menu" onClick={toggleMenu}/>
        
        
    </header>
    )
  }
export default Header