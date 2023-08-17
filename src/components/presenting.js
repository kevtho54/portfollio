import photo from "../assets/moi.jpg";
import cv from "../assets/CV_internet.pdf"
import style from "../style/presenting.module.css";

function Presenting() {
  return (
    <div className={style.presenting}>
      <div className={style.contener_photo}>
        <img className={style.photo} src={photo} alt="developpeur" />
        <a className={style.nav_a} href={cv} download="CV Kévin Thomassin.pdf">
          <button className={style.btn_cv}>Télécharger mon CV</button>
        </a>
      </div>
      <div className={style.text_description}>
        <h2 className={style.title}>
          Bienvenue sur mon portfolio de développeur web !
          </h2> 
          <p className={style.txt}> Découvrez mon
          parcours, mes projets et compétences dans le domaine du développement
          web. Chaque projet reflète ma passion pour créer des expériences
          numériques captivantes. 
          </p> 
          <p className={style.txt}> Je suis toujours ouvert aux nouvelles opportunités de collaboration.
          N'hésitez pas à explorer mes réalisations et à me contacter pour
          discuter de projets futurs. Merci de votre visite et à bientôt !
          
        </p>
        <p>Aller faire un tour sur <a className={style.link} href="https://github.com/kevtho54" target="blank">mon GitHub</a>
           </p>
      </div>
      <div className={style.btn_cv}>
      </div>
    </div>
  );
}
export default Presenting;
