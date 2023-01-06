import React, {useEffect, useState} from 'react'
import {MapContainer, TileLayer, GeoJSON} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './Map.css';


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
                let response = await fetch('https://mexdata-api.onrender.com/mex_map/feature_collections')
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

    /*const geoStyleMX = {
        fillColor: 'white',
        weight: 2,
        opacity: 1,
        color: 'green',
        dashArray: '3',
        fillOpacity: 0.5
    }*/

    const [onselect, setOnselect] = useState({});
    /* function determining what should happen onmouseover, this function updates our state*/
    const highlightFeature = (e => {
        let layer = e.target;
        const {state_key, unemployment_percentage} = e.target.feature.properties;
        setOnselect({
            estado: state_key,
            porcentajeDeDesempleo: unemployment_percentage
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
    const mapPolygonColorToUnemploymentPercentage = (density => {
        return density > 4.5
            ? '#a50f15'
            : density > 3.6
                ? '#de2d26'
                : density > 2.7
                    ? '#fb6a4a'
                    : density > 1.8
                        ? '#fc9272'
                        : density > 0.9
                            ? '#fcbba1'
                            : '#fee5d9';
    })
    const style = (feature => {
        return ({
            fillColor: mapPolygonColorToUnemploymentPercentage(feature.properties.unemployment_percentage),
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
                {/*incluir mapa politico que partido gobierna que entidad después incluir estadítica*/}
                <h2 className='customheading title has-text-white'>Tasa de desocupación total trimestral según entidad federativa</h2>
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
                                    <li>Porcentaje de desempleo: {onselect.porcentajeDeDesempleo}%</li>
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
                    <p className='customheading has-text-white'><a href="https://www.inegi.org.mx/app/tabulados/default.html?nc=624" target="_blank" rel="noreferrer">Fuente: INEGI. Encuesta Nacional de Ocupación y Empleo (ENOE) - información del tercer trimestre 2022</a></p>
                </div>
        </div>

    )
}
export default Map;