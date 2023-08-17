import { NavLink } from "react-router-dom"
import cv from "../assets/CV_internet.pdf"
import style from"../style/header.module.css"
import linkedin from "../assets/Linkedin.png"


function Header({scrollToContact, scrollToProject, scrollToExperience}){
   
    
    return(
    <header className={style.header}>
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
            <p>Rejoignez moi sur Linkedin</p>
            </div>
        <nav className={style.nav}>
            <ul className={style.nav_ul}>
                <li><a className={style.nav_a} href={cv} download="CV Kévin Thomassin.pdf">Mon CV</a></li>
                <NavLink to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={style.nav_a} > Accueil </NavLink>
                <NavLink href="#" className={style.nav_a}  onClick={scrollToExperience} > Experience Technologique </NavLink>
                <NavLink href="#" className={style.nav_a}  onClick={scrollToProject} > Mes Projets </NavLink>
                <NavLink href="#" className={style.nav_a}  onClick={scrollToContact} > Contact </NavLink>
            </ul>
        </nav>
        
    </header>
    )
}
export default Header