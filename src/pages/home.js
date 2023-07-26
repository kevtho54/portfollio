import Header from "../components/header.js"
import Presenting from "../components/presenting.js"
import style from "../style/home.module.css"




function Home() {
return (

    <div className={style.home}>
        <Header />
        <Presenting />
    </div>
)

}
export default Home