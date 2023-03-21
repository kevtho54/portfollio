import  projet from "../projet.json"
import style from "../style/gallery.module.css"

function Card ({cover, title}) {
    return(
        
          <div className={style.card}> 
         <img className={style.img} src={cover} alt={title} />
         <h3 className={style.card_title}>{title}</h3>
         </div> 
     
    )

}

function Gallery() {
    return (
      <div className={style.gallery}>
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
      </div>
    );
  }
export default Gallery