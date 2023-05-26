import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import OurServices from './OurServices';
import Feedback from './Feedback';
import Information from './Information';
import OurDoctors from './OurDoctors/OurDoctors';

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

          <OurDoctors></OurDoctors>
        </div>
    );
};

export default Home;