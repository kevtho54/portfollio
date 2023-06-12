
import style from "../style/header.module.css"
import { NavLink } from "react-router-dom"

function Header (){
    return(
        <div className={style.header}>
        <nav className={style.nav}>
        <div className={style.link_contener}>
        <NavLink className={style.link} to="/home/"> Accueil</NavLink>
        <NavLink className={style.link} to="/about/">Portfolio</NavLink>
        <NavLink className={style.link}to="#galleryFormation">Contact</NavLink>
        </div>

        </nav>    

        </div>
        
        
    )
}
export default Header