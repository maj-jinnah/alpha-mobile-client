import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Customar from '../Customar/Customar';
import Hero from '../Hero/Hero';
import Newslater from '../Newslater/Newslater';
import Waiting from '../Waiting/Waiting';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Hero></Hero>
            <Waiting></Waiting>
            <Customar></Customar>
            <Newslater></Newslater>
        </div>
    );
};

export default Home;