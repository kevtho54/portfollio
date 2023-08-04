import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../style/carrousel-custom.css"

function Carrousel(props){
    const {selectedProject} = props

    return <Carousel infiniteLoop>
        {selectedProject.pictures && selectedProject.pictures.length > 0 ? (
         selectedProject.pictures.map((picture, index) => (
            <div key={index} className="contenerImg">
           <img className="imgCarousel" src={picture} alt={selectedProject.title} />
           </div>
           ))) : (
             <p>Ce projet ne contient pas de photo</p>
             )}
    </Carousel>


}

export default Carrousel