import React from 'react';
import Motivation from '../components/Motivation';
import Introduction from '../components/Introduction';
import Banner from '../components/Banner';
import IntroTech from '../components/IntroTech';

const Home = () => {
    return ( 
        <div>
            <Banner />
            <Motivation />
            <Introduction />
            <IntroTech />
        </div>
     );
}
 
export default Home;

// -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-96 -mt-6