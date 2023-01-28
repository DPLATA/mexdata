import Map from "../components/PoliticalMap/PoliticalMap";
import Legend from "../components/PoliticalMapLegend/PoliticalMapLegend";
import Navigation from "../components/Navigation";
import React from "react";
import Footer from "../components/Footer";

export const MapInfo = () => {
    return (
    <>
        <Navigation/>
        <Map/>
        <Legend/>
                    <Footer/>

    </>
  )
}
 export default MapInfo