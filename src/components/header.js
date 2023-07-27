import cv from "../assets/CV_internet.pdf"
import style from"../style/header.module.css"


function Header(){
    return(
    <header className={style.header}>
        <p className={style.logo}>Logo</p>
        <nav className={style.nav}>
            <ul className={style.nav_ul}>
                <li><a className={style.nav_a} href={cv} download="CV Kévin Thomassin.pdf">Mon CV</a></li>
                <li><a className={style.nav_a} href="#accueil">Accueil</a></li>
                <li><a className={style.nav_a} href="#experience" >Experience Technologique</a></li>
                <li><a className={style.nav_a} href="#Contact">Contact</a></li>
                <li><a className={style.nav_a} href="#Portfollio">Portfollio</a></li>
            </ul>
        </nav>
        
    </header>
    )
}
export default Header