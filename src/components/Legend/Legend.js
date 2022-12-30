import React from 'react';
import './Legend.css';

export const Legend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": '#a50f15' }}>4.51 - 100</div>
            <div style={{ "--color": '#de2d26' }}>3.61 - 4.5</div>
            <div style={{ "--color": '#fb6a4a' }}>2.71 - 3.6</div>
            <div style={{ "--color": '#fc9272' }}>1.81 - 2.7</div>
            <div style={{ "--color": '#fcbba1'}}>0.91 - 1.8</div>
            <div style={{ "--color": '#fee5d9' }}>0 - 0.9</div>
        </div>
    );
}
export default Legend;