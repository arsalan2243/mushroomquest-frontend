import React from 'react';
import './sliders.css';
import mushroomDiagram from '../../mushromPictures/mushroom-diagram.jpg';
import mushroomShapes from '../../mushromPictures/mushroom-shapes.png'; // Import your images here
import capShapes from '../../mushromPictures/cap-shapes.png';
import undersideTypes from '../../mushromPictures/underside-type.png';
import gillsConnections from '../../mushromPictures/gills-connections.png';
import stemShapes from '../../mushromPictures/stem-shapes.png';
import veils from '../../mushromPictures/veils.png';
import { Icon } from './slidersElements'; // Assuming 'Icon' is exported from './slidersElements'
import MushroomQuest from '../../mushromPictures/MushroomQuest.png';
import { DeleteButton } from '../ButtonElements';
import {BASE_URL} from '../../helpers/axiosWithAuth';
import axios from "axios";

function Sliders() {
    const numSlides = 10; // Number of slides

    // Define an array of your images
    const images = [
        mushroomDiagram,
        mushroomShapes,
        capShapes,
        undersideTypes,
        gillsConnections,
        stemShapes,
        veils
        // Add other images here
    ];

    // Define an array of sentences
    const sentences = [
        "1- Understand the general structure of mushroom. Take a look closely, and study it",
        "2- Here we tried to simplify mushroom shape into two. defined cap and no defined cap.",
        "3- General patterns of mushroom caps that can be seen in nature. Closely examine the cap.",
        "4- The underside of mushrooms have 3 unique shapes. Study them and decide which is yours.",
        "5- Gills have several unique types, all related to how they connect to the stem",
        "6- stem shape can also be used as an identification point. Pay close attention to it",
        "7- universal and partial veils, are very easy to identify on mushrooms"
    ];

    // Generate an array of slide indexes
    const slideIndexes = Array.from({ length: numSlides }, (_, index) => index);

    const deleteAccount = (event) => {
        event.preventDefault();
        const username = localStorage.getItem("username");
        axios.delete(`${BASE_URL}/auth/delete/${username}`).then(response => {
            localStorage.removeItem("token");
            window.location.href = '/';
        }).catch(err => {
            console.log(err);
        });
    };
    

    return (
        <>
            <div className='SliderNavigation' >
            <Icon to={'/'} >
                <img src={MushroomQuest} alt="Mushroom" />
            </Icon>
            <DeleteButton onClick={deleteAccount}>Delete Account</DeleteButton>
            </div>
            <div id="wrapper">
                <div className="paragraph">
                    <h1>A short guide on how to identify mushrooms</h1>
                </div>
                <div className="slider">
                    {slideIndexes.map((index) => (
                        <input key={`slide${index}`} type="radio" name="slider" id={`slide${index}`} />
                    ))}
                    <div className="slides">
                        {slideIndexes.map((index) => (
                            <div key={`slide${index}`} className="slide">
                                <img src={images[index % images.length]} alt={`slide ${index + 1}`} />
                                <label className="next" htmlFor={`slide${(index + 1) % numSlides}`}></label>
                                <div className="description">{sentences[index % sentences.length]}</div>
                            </div>
                        ))}
                    </div>
                    <div className="nav">
                        {slideIndexes.map((index) => (
                            <label key={`nav${index}`} className="bottom" htmlFor={`slide${index}`}></label>
                        ))}
                    </div>
                </div>
                <div className="paragraph">Lorem ipsum ... </div>
            </div>
        </>
    );
}

export default Sliders;


