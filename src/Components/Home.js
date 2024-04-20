import PokemonList from './PokemonList'
import '../style/Home.css'
import React from 'react'
import Navbar from './Navbar'

function Home() {
    return (
        <div>
            <Navbar />  
            <div class="homeH1">
                <h1>Pokédex</h1>
                <PokemonList/>
            </div>
        </div>
    ) 
}

export default Home 