import style from "../style/modal.module.css"

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
     <img className={style.img_modal} src={selectedProject.cover} alt={selectedProject.title} />
     <p className={style.texte_modal}>{selectedProject.texte}</p>
     <button><a href={selectedProject.code} target="blank">Code source</a></button>

  </div>
);
}
export default ProjectDetails
