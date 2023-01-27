import { Link } from 'react-router-dom'
import {useState} from "react"

export const Navigation = () => {

    let [isActive, setIsActive] = useState(false);

    return (
    <>
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://relaxed-zuccutto-a8320d.netlify.app">
                    <img alt="logo" src="https://bulma.io/images/placeholders/128x128.png" width="32" height="32"/>
                </a>

                <button onClick={() => {
                    setIsActive(!isActive);
                }} className={`navbar-burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div id="navbarBasicExample"
                 className={`navbar-menu ${isActive ? "is-active" : ""}`}
            >
                <div className="navbar-end">
                    <Link className="navbar-item" to='/'>Feed de inicio</Link>
                    <Link className="navbar-item" to='/lmbstats'>Estadísticas LMB</Link>
                    {/*Estadisticas LFA <Link className="navbar-item" to='/lmbstats'>Estadísticas LMB</Link>*/}
                    <Link className="navbar-item " to='/map'>Mapa con información del INEGI</Link>
                    <Link className="navbar-item " to='/political_map'>Mapa político de México</Link>
                    {/* CDMX standalone map <Link className="navbar-item " to='/map'>Mapa con información del INEGI</Link>*/}
                    {/*Galeria de mapas demograficos rendereados con r<Link className="navbar-item " to='/map'>Mapa con información del INEGI</Link>*/}
                    <a className="navbar-item" href="https://moneyball.eldatomx.com" target="_blank" rel="noreferrer">Moneyball en español</a>
                </div>
            </div>
        </nav>
    </>
  )
}
 export default Navigation