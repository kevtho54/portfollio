import language from "../language.json"
import style from "../style/language.module.css"
import { forwardRef } from "react"

export function Language({logo, title, language}){

    return(
        
            <div className={style.card}>
            <img className={style.imgCard} src={logo} alt={title} />
            <p className={style.titleCard}>{language}</p>
            </div>

    )
}

const DataLanguage = forwardRef((props, ref) => {
    return(
        <section ref={ref} id={style.experience}>
            <h3 className={style.title_language}>Expériences Technologiques</h3>
        <div className={style.contenerCard}>
             {language.map((language) => (
             <Language 
             key={language.id}
             logo={language.logo}
             title={language.title}
             language={language.language}
             />
            ))
            }
        </div>
        </section>
    )

})
export default DataLanguage