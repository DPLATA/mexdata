import './Home.css'
import { Link } from 'react-router-dom'
import {useEffect, useState} from "react";




export const Home = () => {


    let [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('https://mexdata-api.onrender.com/lmb/news_headers')
                let actualData = await response.json()
                setData(actualData.data)
            } catch (error) {
                setData(null)
                console.log(error.message)
            } finally {
            }
        }
        getData()
    }, [])


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
        <section className=" is-fullheight-with-navbar">
            {//<div className="hero-body">
                 }
                <div className="list">
                { data.map(header => {
                        return (<div className="list-item card" key={header.id}>
                            <div className="card-content" >
                                <p className="content has-text-weight-semibold" >
                                    {header.title}
                                </p>
                        </div>
                        </div>)
                }) }
                </div>
            { //</div>
                }
        </section>
        {/* News aggregator for home screen
            poll f polls section
            presidenciables news section
            poll aggregator
        */}

        {/*deportes - triatlon - fba
            Meterle agregador de noticias y estilos para v1
            Meterle seccion de musica y radio
            apartado especial el cuauh por la combinacion perfecta entre deporte y politica
            eñ sitio de noticias mas gracioso de mexico

            Mapas - CDMX shapefiles info datos abiertos gob cdmx
            MAPAS - cuantos estados son gobernados por hombres y cauntos por mujeres
            Seccion acerca de
        */}
    </>
  )
}
 export default Home