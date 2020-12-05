import React, { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css";

const Cards = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <div data-aos ="fade-right" className="Cards">
            <h6>Cards</h6>
            <div className="grids">
                <div className="boxes">1</div>
                <div className="boxes">2</div>
                <div className="boxes">3</div>
                <div className="boxes">4</div>
                <div className="boxes">5</div>
                <div className="boxes">6</div>
                
            </div>
        </div>
    );
};

export default Cards;