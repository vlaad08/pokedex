import React, { useEffect, useState, useRef } from 'react' 
import '../style/PokemonList.css' 
import { Link } from 'react-router-dom' 

function PokemonList() {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)
    const loader = useRef(null)

    useEffect(() => {
        setLoading(true) 
        const fetchPokemons = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`) 
            const data = await response.json() 
            const detailedPokemons = await Promise.all(
                data.results.map(async (pokemon) => {
                    const pokemonDetailResponse = await fetch(pokemon.url) 
                    return await pokemonDetailResponse.json() 
                })
            ) 
            setPokemons(prev => [...prev, ...detailedPokemons]) 
            setLoading(false) 
        } 
        fetchPokemons() 
    }, [offset]) 

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setOffset(prevOffset => prevOffset + 50) 
            }
        }, {
            rootMargin: '100px',
        }) 
        if (loader.current) {
            observer.observe(loader.current) 
        }

        return () => { 
            if (loader.current) {
                observer.unobserve(loader.current) 
            }
        } 
    }, []) 

    return (
        <div className="pokemon-grid">
            {pokemons.map((pokemon, index) => (
                <Link key={index} to={`/pokemon/${pokemon.id}`}>
                    <div className="pokemon-card" style={{ backgroundColor: getTypeColor(pokemon.types[0].type.name) }}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <h3>{pokemon.name}</h3>
                    </div>
                </Link>
            ))}
            {loading && <p>Loading more Pokémons...</p>}
            <div ref={loader} /> 
        </div>
    ) 
}

function getTypeColor(type) {
    const typeColors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    } 
    return typeColors[type] || '#F5F5F5' 
}

export default PokemonList 
