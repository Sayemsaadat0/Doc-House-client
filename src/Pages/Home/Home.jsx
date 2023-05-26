import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import OurServices from './OurServices';
import Feedback from './Feedback';
import Information from './Information';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>home</title>
            </Helmet>
          <Banner></Banner>

          <OurServices></OurServices>

          <Information></Information>

          <Feedback></Feedback>
        </div>
    );
};

export default Home;