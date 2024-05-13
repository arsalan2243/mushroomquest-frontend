import React,{useState} from 'react';
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {homeObjOne} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer/index"




const Home = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => {

        setIsOpen(!isOpen)
    }


    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle} />
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <Services/>
            <Footer/>
        </>
    )

}
export default Home