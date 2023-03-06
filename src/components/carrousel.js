
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import projet from "../projet.json";
import style from "../style/carrousel.module.css";

function Carrousel() {
 

  const images = projet.map((projet) => ({
    original: projet.cover,
    thumbnail: projet.cover,
    originalTitle: projet.title,
    description: projet.description,
  }));



  return (
    <div className={style.contener_cardList}>
      <div className={style.carouselContainer}>
        <ImageGallery
          items={images}
          showPlayButton={true}
          showBullets={true}
          showFullscreenButton={false}
          autoPlay={true}
          slideInterval={3000}
          slideDuration={2000}
          renderItem={(item) => {
            return (
              <div className={style.carouselItem}>
                <img className={style.carouselImage} src={item.original} alt={item.originalTitle} />
                <div className={style.carouselDescription}>
                  <h2 className={style.carouselTitle}>{item.originalTitle}</h2>
                  <p className={style.carouselSubtitle}>{item.description}</p>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}

export default Carrousel;
