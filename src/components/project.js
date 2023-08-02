import projects from "../projet.json";
import style from "../style/project.module.css";
import ReactModal from "react-modal";
import ProjectDetails from "./modalContent";
import { useState } from "react";

export function Gallery({ title, cover, openModal, id }) {
  return (
     // Utilisation d'une fonction fléchée pour onClick
    // Lorsque l'utilisateur clique sur l'élément, la fonction fléchée sera appelée,
    // et elle exécutera la fonction openModal avec l'id du projet en tant qu'argument.
    <div className={style.card} onClick={() => openModal(id)}>
      <img className={style.imgCard} src={cover} alt={title} />
      <p className={style.titleCard}>{title}</p>
    </div>
  );
}

function DataProject() {
  /* initialisation de la variable d'etat useState */
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
 

  const openModal = (id) => {
    const project = projects.find((project) => project.id === id);
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  return (
    <section id={style.project}>
      <h2>Mes Projets</h2>
      <div className={style.contenerCard}>
        {projects.map((project) => (
          <Gallery
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            lien={project.lien}
            code={project.code}
            cover={project.cover}
            openModal={openModal}
          />
        ))}
        <div>
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={style.custom}
            overlayClassName={style.custom_modal}
          >
            <button className={style.btn_modal} onClick={closeModal}>
              X
            </button>
            <ProjectDetails selectedProject={selectedProject} />
          </ReactModal>
        </div>
      </div>
    </section>
  );
}

export default DataProject;
