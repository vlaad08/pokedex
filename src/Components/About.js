import React from 'react';
import '../style/About.css';
import Navbar from './Navbar';

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <h1>Welcome to Pokedex Pro!</h1>
                <p>Hey there! Welcome to Pokedex Pro, your go-to spot for all things Pokémon. Whether you're looking to learn about your favorite Pokémon or find some new favorites, we've got you covered.</p>
                <p>Our app pulls all its super cool info from PokeAPI, the most awesome Pokémon database out there. This means you always get the freshest, most accurate Pokémon details. Neat, right?</p>
                <p>So, what can you do here? Search up any Pokémon, check out their stats, see their evolution paths, and much more. It's all just a few clicks away!</p>
                <p>Got ideas on how we can make Pokedex Pro even better? We'd love to hear them! Drop us a line anytime.</p>
                <p>Enjoy your Pokémon adventure!</p>
            </div>
        </div>
    );
};

export default About;
