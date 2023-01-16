import Map from "../components/PoliticalMap/PoliticalMap";
import Legend from "../components/PoliticalMapLegend/PoliticalMapLegend";
import Navigation from "../components/Navigation";
import React from "react";

export const MapInfo = () => {
    return (
    <>
        <Navigation/>
        <Map/>
        <Legend/>
    </>
  )
}
 export default MapInfo