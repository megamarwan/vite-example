// 1. Import React and the useState hook from the React library
import React, { useState } from 'react';

// 2. Define a functional component named PokemonFetch
const PokemonFetch = () => {
    // 3. Initialize state variables using the useState hook
    const [pokemonName, setPokemonName] = useState(''); // State for Pokémon name
    const [pokemonSprite, setPokemonSprite] = useState(''); // State for Pokémon sprite URL
    const [error, setError] = useState(null); // State for error messages

    // 4. Define an asynchronous function to fetch Pokémon data
    const fetchData = async () => {
        setError(null); // 5. Reset error state to handle new fetch
        try {
            // 6. Fetch Pokémon data from the PokeAPI with the given name
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            
            // 7. Check if the response was successful
            if (!response.ok) {
                // 8. Throw an error if the fetch was not successful
                throw new Error("Could not fetch resource");
            }
            
            // 9. Parse the response data to JSON
            const data = await response.json();
            
            // 10. Check if the sprite data exists
            if (!data.sprites || !data.sprites.front_default) {
                // 11. Throw an error if no sprite is found
                throw new Error("No sprite found for this Pokémon.");
            }
            
            // 12. Set the Pokémon sprite URL in the state
            setPokemonSprite(data.sprites.front_default);
        } catch (error) {
            // 13. Log the error to the console for debugging
            console.error(error);
            // 14. Set the error message in the state for user feedback
            setError(error.message);
        }
    };

    // 15. Return the JSX to render the component
    return (
        <div>
            {/* 16. Input field for entering the Pokémon name */}
            <input 
                type="text" // Type of the input
                placeholder="Enter Pokemon name" // Placeholder text
                value={pokemonName} // Controlled input value from state
                onChange={(e) => setPokemonName(e.target.value)} // Update state on input change
            />
            {/* 17. Button to trigger the fetchData function */}
            <button onClick={fetchData}>Fetch Pokémon</button>
            <br />
            {/* 18. Display error message if one exists */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {/* 19. Display Pokémon sprite if it exists */}
            {pokemonSprite && <img src={pokemonSprite} alt="Pokemon Sprite" style={{ display: 'block', marginTop: '10px' }} />}
        </div>
    );
};

// 20. Export the PokemonFetch component for use in other parts of the application
export default PokemonFetch;