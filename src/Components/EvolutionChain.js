import React, {useState, useEffect} from 'react' 
import { Link } from 'react-router-dom' 

function EvolutionChain({ chain }) {
    const fetchPokemonDetails = async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 
        const data = await response.json() 
        return data 
    } 

    const EvolutionNode = ({ node }) => {
        const [pokemonDetails, setPokemonDetails] = useState(null) 

        useEffect(() => {
            fetchPokemonDetails(node.species.name).then(data => {
                setPokemonDetails(data) 
            }) 
        }, [node.species.name]) 

        if (!pokemonDetails) return <p>Loading...</p> 

        return (
            <div className="evolution-item">
                <Link to={`/pokemon/${pokemonDetails.id}`}>
                    <img src={pokemonDetails.sprites.front_default} alt={node.species.name} />
                    <p>{node.species.name}</p>
                </Link>
                {node.evolves_to.length > 0 && (
                    <div className="evolution-next-stage">
                        {node.evolves_to.map((nextNode, index) => (
                            <EvolutionNode key={index} node={nextNode} />
                        ))}
                    </div>
                )}
            </div>
        ) 
    } 

    return (
        <div className="evolution-chain-container">
            <h2>Evolution Chain</h2>
            <div className="evolution-chain">
                <EvolutionNode node={chain.chain} />
            </div>
        </div>
    ) 
}

export default EvolutionChain 
