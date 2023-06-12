import  projet from "../projet.json"
import style from "../style/projetFormation.module.css"


export function Card ({cover, title, description}) {
    return(
          <div className={style.card}> 
         <img className={style.img} src={cover} alt={title} />
         <div className={style.card_content}>
         <h3 className={style.card_title}>{title}</h3>
         <p className={style.card_description}>{description}</p>
         </div>
         </div> 
         
         
         )
         
        }
        
        function Gallery() {
    return (
      <section id={style.galleryFormation}>
        <h2 className={style.section_title}> Projet réalisé en formation</h2>
        <p className={style.section_description}> Dans cette seciton vous retrouverez les projets que j'ai réalisé dans le cadre de ma formation.</p>
        {projet.map((projet) => (
        
          <Card
            key={projet.id}
            title={projet.title}
            description={projet.description}
            cover={projet.cover}
            code={projet.code}
            lien={projet.lien}
            />
           
            ))}
      </section>
    );
  }
export default Gallery