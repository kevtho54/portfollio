import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../style/header.module.css"

function Header (){
return(
<header>
 <div className="logo">
   <Link to="/home">
<img src={logo} alt="logo du site" />
</Link>
 </div>
 
 <nav className={style.nav}>
    <NavLink className ={style.link_home} to="/home">
    <p>Accueil</p>
    </NavLink>

    <NavLink className ={style.link_about}to="/about">
    <p>A propos de moi</p>
    </NavLink>

 </nav>

</header>
)

}
export default Header