import React from 'react';

import Sliders from "../components/sliders/sliders";
import Footer from '../components/Footer';
import Mushroom from '../components/mushroomFilter';
// import NavBar from '../components/NavBar';

const SliderPage = () => {

    return (

        <>
        {/* <NavBar/> */}
            <Sliders/>
            <Mushroom/>
            <Footer/>
        </>
    )
}

export default SliderPage

