
import Header from "../components/header"
import Card from "../components/card"
import style from "../style/body.module.css"


function home() {
return (

    <div className={style.body}>
        <Header />
        <h1>Bienvenue sur mon portefolio</h1>
        <Card />


    </div>
)

}
export default home