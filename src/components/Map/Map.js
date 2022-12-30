import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
import mx_states from '../../assets/mx_states.json'
import 'leaflet/dist/leaflet.css';
import './Map.css';


export const Map = () => {
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
    const highlightFeature = (e=> {
        let layer = e.target;
        const { state_key, unemployment_percentage } = e.target.feature.properties;
        setOnselect({
            estado:state_key,
            porcentajeDeDesempleo:unemployment_percentage
        });
        layer.setStyle({
            weight: 1,
            color: "black",
            fillOpacity: 1
        });
    });
    /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
    const resetHighlight= (e =>{
        setOnselect({});
        e.target.setStyle(style(e.target.feature));
    })
    /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
     highlightFeature and resetHighlight*/
    const onEachFeature= (feature, layer)=> {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
        });
    }
    const mapPolygonColorToUnemploymentPercentage=(density => {
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
      const feature = mx_states.features.map(feature=>{
        return(feature);
    });

    return(
         <div className='customcontainer'>
            <div className="customheader">
            <h2 className='customheading'>Porcentaje de desempleo en México por estado INEGI 2022</h2>
            </div>
            <div className="">
                <div className="">
                    {!onselect.estado && (
                    <div className="census-info-hover">
                        <p>Hover on each county for more details</p>
                    </div>)}
                    {onselect.estado && (
                        <ul className="census-info">
                            <li><strong>{onselect.estado}</strong></li><br/>
                            <li>Porcentaje de desempleo: {onselect.porcentajeDeDesempleo}</li>
                        </ul>
                    )}
                <MapContainer center={cdmx_coords}
                zoom={7} scrollWheelZoom={true} style={mapContainerStyle}>
                    <TileLayer
                        attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                        url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                    />
                    <GeoJSON data={feature} style={style} onEachFeature={onEachFeature}/>
                </MapContainer>
                </div>
            </div>
        </div>

    )
}
export default Map;