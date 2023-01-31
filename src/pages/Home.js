import './Home.css'
import {useEffect, useState} from "react"
import {FiExternalLink} from "react-icons/fi";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ReactPaginate from 'react-paginate';
import lmb from '../assets/imgs/lmb.svg'
import lfa from '../assets/imgs/lfa.png'
import aguamala from '../assets/imgs/aguamala.png'
import boletomovil from '../assets/imgs/boletomovil.png'
import pillofon from '../assets/imgs/pillofon.png'
import ibero from '../assets/imgs/ibero.png'
import gleague from '../assets/imgs/gleague.png'



export const Home = () => {


    //let localhost = true

    const itemsPerPage = 6

    let [data, setData] = useState([]);


    const pageCount = Math.ceil(data.length / itemsPerPage);
    const [itemOffset, setItemOffset] = useState(0);


    function Items({currentItems}) {
        return (
            <>
                {currentItems.map(header => {
                    return (
                        <article className="post" key={header.id}>
                            <p className="has-text-weight-semibold">{header.title}</p>
                            <div className="media">
                                <div className="media-left">
                                    <p className="image is-32x32">
                                        <img alt="news tag avatar"
                                             src={header.tag === 'LFA' ? lfa : header.tag === 'LMB' ? lmb : gleague }/>
                                    </p>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <span className="tag is-success is-light">{header.tag}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="media-right">
                                    <a href={header.link} target="_blank" rel="noreferrer"
                                       className="has-text-grey-light"><FiExternalLink/></a>
                                </div>
                            </div>
                        </article>)
                })}
            </>
        );
    }


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    function PaginatedItems({itemsPerPage}) {

        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = data.slice(itemOffset, endOffset);

        return (
            <>
                <Items currentItems={currentItems}/>
            </>
        );
    }


    useEffect(() => {


        const getData = async () => {
            try {
                // let response = !localhost ? await fetch('https://mexdata-api.onrender.com/lmb/news_complete_headers') : await fetch('http://localhost:8000/lmb/news_complete_headers')
                let response = await fetch(`${process.env.REACT_APP_BASE_URL}/lmb/news_complete_headers`)
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
            <Navigation/>
            <section className="section container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <section className="hero is-small">
                                <div className="hero-body">
                                    <div className="container">
                                        <a href="https://boletomovil.com" target="_blank" rel="noreferrer">
                                        <figure className="image half-banner">
                                            <img alt="add banner" src={boletomovil}/>
                                        </figure>
                                        </a>
                                        {/*<h1 className="title">
                                            Banner hero
                                        </h1>
                                        <h2 className="subtitle">
                                            anuncio
                                        </h2>*/}
                                    </div>
                                </div>
                            </section>
                    </div>
                </div>
            </section>

            <section className="section container">
                <div className="columns">
                    <div className="column is-2">
                        <aside className="menu">
                            <section className="hero welcome is-small">
                                <div className="hero-body">
                                    <div className="container">
                                        <a href="https://ibero909.fm" target="_blank" rel="noreferrer">
                                        <figure className="image is-128x128">
                                            <img alt="add banner" src={ibero}/>
                                        </figure>
                                        </a>
                                        {/*<h1 className="title">
                                            Banner esquina
                                        </h1>
                                        <h2 className="subtitle">
                                            Anuncio
                                        </h2>*/}
                                    </div>
                                </div>
                            </section>
                            <section className="hero welcome is-small">
                                <div className="hero-body">
                                    <div className="container">
                                        <a href="http://aguamala.com.mx" target="_blank" rel="noreferrer">
                                        <figure className="image is-128x128">
                                            <img alt="add banner" src={aguamala}/>
                                        </figure>
                                        </a>
                                        {/*<h1 className="title">
                                            Banner esquina
                                        </h1>
                                        <h2 className="subtitle">
                                            Anuncio
                                        </h2>*/}
                                    </div>
                                </div>
                            </section>
                            <section className="hero welcome is-small">
                                <div className="hero-body">
                                    <div className="container">
                                        <a href="https://pillofon.mx" target="_blank" rel="noreferrer">
                                        <figure className="image is-128x128">
                                            <img alt="add banner" src={pillofon}/>
                                        </figure>
                                        </a>
                                        {/*<h1 className="title">
                                            Banner esquina
                                        </h1>
                                        <h2 className="subtitle">
                                            Anuncio
                                        </h2>*/}
                                    </div>
                                </div>
                            </section>
                        </aside>
                    </div>
                    <div className="column is-10">
                        <div className="box content">
                            <PaginatedItems itemsPerPage={itemsPerPage}/>
                        </div>
                        <ReactPaginate
                            // breakLabel="..."
                            nextLabel="Next"
                            onPageChange={handlePageClick}
                            previousClasses={'pagination-previous'}
                            containerClassName={'pagination'}
                            // pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="Previous"
                            // renderOnZeroPageCount={null}
                        />
                    </div>

                </div>

            </section>

            {/*<PaginatedItems itemsPerPage={2} />*/}


            {/*
         News aggregator for home screen
            poll f polls section
            presidenciables news section
            poll aggregator


        deportes - triatlon - fba
            Meterle agregador de noticias y estilos para v1
            Meterle seccion de musica y radio
            apartado especial el cuauh por la combinacion perfecta entre deporte y politica
            eñ sitio de noticias mas gracioso de mexico

            Mapas - CDMX shapefiles info datos abiertos gob cdmx
            MAPAS - cuantos estados son gobernados por hombres y cauntos por mujeres
            Seccion acerca de

            implementar paginacion
            llenar de datos partes con mapas
        */}
            <Footer/>
        </>
    )
}
export default Home