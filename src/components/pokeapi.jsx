import React, { useState } from 'react';

const PokemonFetch = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonSprite, setPokemonSprite] = useState('');
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setError(null); // Reset error state
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }
            const data = await response.json();
            if (!data.sprites || !data.sprites.front_default) {
                throw new Error("No sprite found for this Pokémon.");
            }
            setPokemonSprite(data.sprites.front_default);
        } catch (error) {
            console.error(error);
            setError(error.message); // Set error state for user feedback
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter Pokemon name" 
                value={pokemonName} 
                onChange={(e) => setPokemonName(e.target.value)} 
            />
            <button onClick={fetchData}>Fetch Pokémon</button>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {pokemonSprite && <img src={pokemonSprite} alt="Pokemon Sprite" style={{ display: 'block', marginTop: '10px' }} />}
        </div>
    );
};

export default PokemonFetch;