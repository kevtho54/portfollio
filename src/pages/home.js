import style from "../style/home.module.css"
import Banniere from "../components/banniere"
import Header from "../components/header"
import Gallery from "../components/gallery"



function home() {
return (

    <div className={style.home}>
        <Header />
        <Banniere />
        <Gallery />
       
    </div>
)

}
export default home