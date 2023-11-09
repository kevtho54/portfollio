import style from "../style/modal.module.css"
import Carrousel from "./carrousel";

function ProjectDetails(props){
const {selectedProject} = props

 // Vérifiez si selectedProject est défini avant d'accéder à ses propriétés
 if (!selectedProject) {
  return null; // Retourne null si selectedProject est null pour éviter les erreurs
}

return (
  <div className={style.contenerModal}>
     <h2 className={style.title_modal}>{selectedProject.title}</h2>
     <p className={style.description_modal}>{selectedProject.description}</p>
      <Carrousel  selectedProject={selectedProject}/>
       
     <p className={style.txt_modal}>{selectedProject.texte}</p>
     <button className={style.btn_code}><a className={style.txt_btn} href={selectedProject.code} target="blank">Code source</a></button>

  </div>
);
}
export default ProjectDetails
