import Button from "../assets/Vector.svg";
import React, { useState } from "react";
import style from "../style/collapse.module.css"

function Collapse(props){

    const [isOpen,setIsOpen]= useState(false);
    const toggle = () => setIsOpen(!isOpen)

    return(
     <div className={style.collapseContener}>
      <div className={style.entete_collapse}>
        <p className={style.collapse_title}> {props.title} </p>

        <img
          src={Button}
          alt="boutton menu deroulant"
          className={`${style.button} ${
            isOpen ? style.button_down : style.button_up
          }`} /* ici, j'utilise une facon particulière d'ajouter du style. si le bouton et fermé alors applique le style bouton up. si il est ouvert, utilise le style bouton_down*/
          onClick={toggle}
        />
      </div>

      {isOpen && (
        <div className={style.collapseContent}>
          <div className={style.collapse_txt}>{props.text}</div>
        </div>
      )}
     </div>
    )
}
export default Collapse