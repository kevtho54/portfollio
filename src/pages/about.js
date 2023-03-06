import Header from "../components/header"
import photo from "../assets/moi.png"
import style from "../style/about.module.css"


function About() {
return(
    <div>
        <Header />
        <h1>A propos de moi</h1>
        <div>
            <img className={style.photo} src={photo} alt="concepteur du site" />
        </div>
    </div>
)

}
export default About