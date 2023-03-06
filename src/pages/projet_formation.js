
import CardList from "../components/cardProject";
import Header from "../components/header"
import style from "../style/projet_formation.module.css"

function ProjetFormation(){
  return(
    <div className="projet_formation">
      <Header />
      <h1 className={style.titlePage}>Projet formation</h1>
      
      <CardList />
    </div>
  )
}
export default ProjetFormation