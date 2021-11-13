import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: "url('/banner.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
            <div className="banner-inner">
                <h1>Fragrance For You</h1>
                
            </div>

        </div>
    );
};

export default Banner;