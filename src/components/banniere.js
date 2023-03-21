import photo from "../assets/moi.png"
import style from "../style/banniere.module.css"
import Collapse from "./collapse"

function Banniere(){
    return (
        <div className={style.contener_banniere}>
          <h1 className={style.title}> Bienvenue sur mon portfollio</h1>
          <img className={style.photo} src={photo} alt="créateur du site" />
         < Collapse title = "Présentation" 
          text = "Je me présente, Kevin Thomassin, un jeune développeur web diplômé d’une formation de niveau bac +2 chez OpenClassrooms. Je vous laisse découvrir mes projets réalisés en naviguant sur le site."/>
        </div>
    )
}

export default Banniere