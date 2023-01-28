import Map from "../components/Map/Map";
import Legend from "../components/Legend/Legend";
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