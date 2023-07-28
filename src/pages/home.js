import Header from "../components/header.js"
import DataLanguage from "../components/language.js"
import Presenting from "../components/presenting.js"
import DataProject from "../components/project.js"
import style from "../style/home.module.css"




function Home() {
return (

    <div className={style.home}>
        <Header />
        <Presenting />
        <DataLanguage />
        <DataProject />
    </div>
)

}
export default Home