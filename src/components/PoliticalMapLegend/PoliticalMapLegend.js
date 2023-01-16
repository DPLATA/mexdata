import React from 'react';
import './PoliticalMapLegend.css';

export const PoliticalMapLegend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": '#AF241E' }}>MORENA</div>
            <div style={{ "--color": '#23744A' }}>PRI</div>
            <div style={{ "--color": '#1E3189' }}>PAN</div>
            <div style={{ "--color": '#EC7F02' }}>MOVIMIENTO CIUDADANO</div>
            <div style={{ "--color": '#4DB245'}}>PARTIDO VERDE</div>
            <div style={{ "--color": '#722E85' }}>ENCUENTRO SOCIAL</div>
        </div>
    );
}
export default PoliticalMapLegend;