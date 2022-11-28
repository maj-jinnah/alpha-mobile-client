import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Customar from '../Customar/Customar';
import Newslater from '../Newslater/Newslater';
import Waiting from '../Waiting/Waiting';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Brand></Brand>
            <Waiting></Waiting>
            <Customar></Customar>
            <Newslater></Newslater>
        </div>
    );
};

export default Home;