import Card from "./Card";
import Head from "./Head";
import ScoreBoard from './ScoreBoard';
import { useEffect, useState } from "react";

export default function Game () {
    const [ pokemonData, setPokemonData ] = useState([]);
    const [ clickedPokemon, setClickedPokemon ] = useState([]);
    const [ score, setScore ] = useState(0);

    useEffect(() => {
        fetchPokemonData();
    }, [])

    const fetchPokemonData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
          .then(response => response.json())
          .then(data => {
            const promises = data.results.map(pokemon =>
              fetch(pokemon.url)
                .then(response => response.json())
                .then(detail => ({
                  id: detail.id,
                  name: detail.name,
                  image: detail.sprites.other['official-artwork'].front_default,
                }))
            );
    
            Promise.all(promises)
              .then(details => {
                const selectedPokemon = details.sort(() => 0.5 - Math.random()).slice(0, 12);
                setPokemonData(selectedPokemon);
              })
              .catch(error => console.error('Error fetching Pokémon details:', error));
          })
          .catch(error => console.error('Error fetching Pokémon list:', error));
      };
    
    const randomize = (pokemons) => {
        const newOrder = pokemons.sort(() => 0.5 - Math.random()).slice(0, 12);
        setPokemonData(newOrder);
    }

    const handleCardClick = (id) => {
        if (clickedPokemon.includes(id)) {
            setScore(0);
            setClickedPokemon([]);
            randomize(pokemonData);
        }
        else {
            setClickedPokemon([ ...clickedPokemon, id ]);
            setScore(score + 1);
            randomize(pokemonData);
        }
    }
    

    return (
        <div className="Game">
            <Head style={styles.def}/>
            <hr />
            <ScoreBoard score={score} style={styles.def}/>
            <hr /><br />
            <div style={styles.cardContainer}>
                {pokemonData.map(pokemon => (
                    <Card key={pokemon.id} pokemon={pokemon} onClick={handleCardClick} />
                ))}
            </div>
        </div>
    );
}

const styles = {
    def: {
      textAlign: 'center',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '10px',
    },
  };
  