import React, {useEffect, useState} from 'react'
import {MapContainer, TileLayer, GeoJSON} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './PoliticalMap.css';


export const Map = () => {
    const [mx_states, setMx_states] = useState({
        "type": "featureCollection",
        "features": []
    })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch(`${process.env.REACT_APP_BASE_URL}/mex_map/feature_collections`)
                let actualData = await response.json()
                setMx_states({...mx_states, features: actualData.data})
                setError(null)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [mx_states, error, loading])

    const mapContainerStyle = {
        height: '75vh',
        width: '85%',
        margin: '0 auto',
    }
    const cdmx_coords = [19.42847, -99.12766]

    const [onselect, setOnselect] = useState({});
    /* function determining what should happen onmouseover, this function updates our state*/
    const highlightFeature = (e => {
        let layer = e.target;
        const {state_key, governor_political_party} = e.target.feature.properties;
        setOnselect({
            estado: state_key,
            partido_politico_en_el_poder: governor_political_party
        });
        layer.setStyle({
            weight: 1,
            color: "black",
            fillOpacity: 1
        });
    });
    /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
    const resetHighlight = (e => {
        setOnselect({});
        e.target.setStyle(style(e.target.feature));
    })
    /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
     highlightFeature and resetHighlight*/
    const onEachFeature = (feature, layer) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
        });
    }
    const mapPolygonColorToPoliticalPartyInPower = (party => {
        return party === 'MORENA'
            ? '#AF241E'
            : party === 'PRI'
                ? '#23744A'
                : party === 'PAN'
                    ? '#1E3189'
                    : party === 'MC'
                        ? '#EC7F02'
                        : party === 'PVEM'
                            ? '#4DB245'
                            : party === 'PRD'
                                ? '#F0C506'
                                : party === 'PES'
                                ? '#722E85'
                                : '#FFFFFF'
    })
    const style = (feature => {
        return ({
            fillColor: mapPolygonColorToPoliticalPartyInPower(feature.properties.governor_political_party),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '2',
            fillOpacity: 0.5
        });
    });

    let feature = mx_states.features.map(feature => {
        return (feature);
    });

    return (

        <div className='customcontainer'>
            <div className="customheader">
                <h2 className='customheading title has-text-white'>Mapa político: Gobernaturas de México</h2>
            </div>
            {
                (loading && <p>Loading</p>) ||
                <div className="">
                    <div className="">
                        {!onselect.estado && (
                            <div className="census-info-hover">
                                <p>Pon el puntero sobre el estado del que quieres más información</p>
                            </div>)
                        }
                        {
                            onselect.estado && (
                                <ul className="census-info">
                                    <li><strong>{onselect.estado}</strong></li>
                                    <br/>
                                    <li>Partido político en el poder: {onselect.partido_politico_en_el_poder}</li>
                                </ul>
                            )
                        }
                        <MapContainer center={cdmx_coords} zoom={7} scrollWheelZoom={true} style={mapContainerStyle}>
                            <TileLayer
                                attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                                url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"/>
                            <GeoJSON data={feature} style={style} onEachFeature={onEachFeature}/>
                        </MapContainer>
                    </div>
                </div>
            }
                <div className="customfooter">
                    {/*<p className='customheading has-text-white'><a href="https://www.inegi.org.mx/app/tabulados/default.html?nc=624" target="_blank" rel="noreferrer">Fuente: INEGI. Encuesta Nacional de Ocupación y Empleo (ENOE) - información del tercer trimestre 2022</a></p>*/}
                    <p className='customheading has-text-white'>2023</p>
                </div>
        </div>

    )
}
export default Map;