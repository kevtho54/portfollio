import project from "../projet.json"
import style from "../style/project.module.css"

export function Gallery({title, cover }){
    return(
        
                <div className={style.card}>
                    <img className={style.imgCard} src={cover} alt={title} />
                    <p className={style.titleCard}>{title}</p>
                </div>
                 

    )
}
function DataProject({title}){
    return(
        
        <section id={style.project}>
             <h2>Mes Projets</h2>
            <div className={style.contenerCard}>
            {project.map((project) =>(
                <Gallery 
                id={project.id}
                title={project.title}
                description={project.description}
                lien={project.lien}
                code={project.code}
                cover={project.cover}
                />
              )
             )
            }
        </div>
        </section>
    )
}

export default DataProject

