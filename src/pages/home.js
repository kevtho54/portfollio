import Header from "../components/header.js"
import DataLanguage from "../components/language.js"
import Presenting from "../components/presenting.js"
import DataProject from "../components/project.js"
import Contact from "../components/contact.js"
import Footer from "../components/footer.js"
import style from "../style/home.module.css"
import { useRef } from "react"


function Home() {
    // Créez une référence (ref) pour récupérer l'id de la section "Contact"
    const sectionRefContact = useRef(null);
    const sectionRefExperience = useRef(null);
    const sectionRefProject = useRef(null);
    // Fonction de défilement en douceur vers la section "Contact"
    const scrollToContact = () => {
      if (sectionRefContact.current) {
        sectionRefContact.current.scrollIntoView({ behavior: "smooth",});
      
      }
    };
    const scrollToProject = () => {
      if (sectionRefProject.current) {
        sectionRefProject.current.scrollIntoView({ behavior: "smooth",  });
        console.log("sectionrefproject", sectionRefProject);
      }
  };
    const scrollToExperience = () => {
      if (sectionRefExperience.current) {
        sectionRefExperience.current.scrollIntoView({ behavior: "smooth",  });
        console.log("sectionrefproject", sectionRefExperience);
      }
  };
  
    // Rendu du composant Home
    return (
      <div className={style.home}>
        {/* Rendu du composant Header en passant la fonction de défilement */}
        <Header scrollToContact={scrollToContact}  scrollToProject={scrollToProject} scrollToExperience={scrollToExperience}/>
        {/* Rendu des autres composants (Presenting, DataLanguage, DataProject) */}
        <Presenting />
        <DataLanguage ref={sectionRefExperience}/>
        <DataProject ref={sectionRefProject}/>
        {/* Rendu du composant Contact en passant la référence (ref) */}
        <Contact ref={sectionRefContact} />
        <Footer />
      </div>
    );
  }
  
  export default Home;
  