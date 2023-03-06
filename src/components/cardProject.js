

import style from "../style/cardProject.module.css"
import projet from "../projet.json";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Gallery({ cover, title, id, description }) {
  const [isHover, setIsHover] = useState(false);// J'utilise la variable d'etat pour modfier l'etat de m'a description. ici sur false elle ,n'apparait pas par defaut.
  
  return (
    <div className={style.cardList} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >{/* ici OnmouseEnter passe sur true quand la souris survole une carte et onmouseleave false quand celle si ne survole plus*/}
      
      <Link className= {style.link} to={`selected_project//${id}`}>
        <img className={style.cover} src={cover} alt={title} />
        <p className={style.card_title}>{title}</p>

      {/*Pour finir, si isHover et true (si ma souris survol ma carte) alors ma description s'affiche*/}
        {isHover && (
        <div className={style.description}>
          <p> {description} </p>
        </div>
      )}
        
      </Link>
      
    </div>
  );
}

function CardList() {
  return (
    <div className={style.gallery}>
      {projet.map((projet) => (
        <Gallery
          key={projet.id}
          id={projet.id}
          title={projet.title}
          description={projet.description}
          cover={projet.cover}
        />
      ))}
    </div>
  );
}

export default CardList;