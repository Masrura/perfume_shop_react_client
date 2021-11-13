import React from 'react';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import SeeReviews from '../SeeReviews/SeeReviews';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Explore loc='home'></Explore>
            <SeeReviews></SeeReviews>
            <WhyUs></WhyUs>   
        </div>
    );
};

export default Home;