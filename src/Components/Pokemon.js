import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom' 
import EvolutionChain from './EvolutionChain' 
import '../style/Pokemon.css'   // Ensure your CSS file is linked properly

function Pokemon() {
    const { id } = useParams() 
    const [pokemonDetails, setPokemonDetails] = useState(null) 
    const [evolutionChain, setEvolutionChain] = useState(null) 

    useEffect(() => {
        async function fetchPokemonDetails() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) 
                const data = await response.json() 
                setPokemonDetails(data) 
                
                const speciesResponse = await fetch(data.species.url) 
                const speciesData = await speciesResponse.json() 
                
                const evolutionResponse = await fetch(speciesData.evolution_chain.url) 
                const evolutionData = await evolutionResponse.json() 
                setEvolutionChain(evolutionData) 
            } catch (error) {
                console.error('Fetching error:', error) 
            }
        }
        fetchPokemonDetails() 
    }, [id]) 

    if (!pokemonDetails) return <div>Loading...</div> 

    return (
        <div className="pokemon-container">
            <div className="pokemon-profile">
                <img src={pokemonDetails.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokemonDetails.name} className="pokemon-image" />
                <div className="pokemon-info">
                    <h1>{pokemonDetails.name}</h1>
                    <p><strong>Type:</strong> {pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
                    <p><strong>Height:</strong> {pokemonDetails.height} decimetres</p>
                    <p><strong>Weight:</strong> {pokemonDetails.weight} hectograms</p>
                </div>
            </div>
            <div className="pokemon-stats">
                <h2>Stats</h2>
                {pokemonDetails.stats.map(stat => (
                    <div key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</div>
                ))}
            </div>
            {evolutionChain && <EvolutionChain chain={evolutionChain} />}
        </div>
    ) 
}

export default Pokemon 
