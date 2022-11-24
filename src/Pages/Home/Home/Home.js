import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Customar from '../Customar/Customar';
import Newslater from '../Newslater/Newslater';
import Waiting from '../Waiting/Waiting';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Waiting></Waiting>
            <Customar></Customar>
            <Newslater></Newslater>
        </div>
    );
};

export default Home;