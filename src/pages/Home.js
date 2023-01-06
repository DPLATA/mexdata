import './Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
    <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link className="navbar-item" to='/lmbstats'>Estadísticas LMB</Link>
                    <Link className="navbar-item " to='/map'>Mapa con información del INEGI</Link>
                    <a className="navbar-item" href="https://medium.com/moneyball-en-español" target="_blank" rel="noreferrer">Moneyball en español</a>
                </div>
            </div>
        </nav>
        <section className="hero is-fullheight-with-navbar is-info">
            <div className="hero-body">
            </div>
        </section>


        {/*deportes - triatlon - fba
            Meterle agregador de noticias y estilos para v1
            Meterle seccion de musica y radio
        */}
    </>
  )
}
 export default Home