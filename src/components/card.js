import style from "../style/card.module.css"
import { Link } from "react-router-dom"

function Card(){
return(
    <div className={style.contener_card}>
     <Link to="/projet_formation" className={style.link}>
      <div className={style.card}></div>
      <h2 className={style.titlecard}> Projet formation</h2>
      </Link>
<Link to="/projet_perso"className= {style.link} >
      <div className={style.card}></div>
      <h2 className={style.titlecard}> Projet perso</h2>
</Link>
    </div>
)

}

export default Card