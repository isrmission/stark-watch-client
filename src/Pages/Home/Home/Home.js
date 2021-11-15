import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import TopBanner from '../TopBanner/TopBanner';
import WhyUS from '../WhyUs/WhyUS';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <SpecialOffer></SpecialOffer>
            <Products></Products>
            <WhyUS></WhyUS>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;