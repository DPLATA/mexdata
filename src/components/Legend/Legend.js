import React from 'react';
import './Legend.css';

export const Legend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": '#a50f15' }}>6 - 100</div>
            <div style={{ "--color": '#de2d26' }}>5 - 6</div>
            <div style={{ "--color": '#fb6a4a' }}>3 - 4</div>
            <div style={{ "--color": '#fc9272' }}>2 - 3</div>
            <div style={{ "--color": '#fcbba1'}}>1 - 2</div>
            <div style={{ "--color": '#fee5d9' }}>0 - 1</div>
        </div>
    );
}
export default Legend;