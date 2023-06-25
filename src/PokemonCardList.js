import React from 'react';
import { useGlobalContext } from './Context';
import PokemonCard from './PokemonCard';
import './pokemoncardList.css';
const PokemonCardList= () => {
  const { allPokemons} = useGlobalContext();

  return (
      <div className="row-container">
       <div className="col-container">
       {allPokemons.map((poke,id) => {
          return <PokemonCard  key={id} {...poke} />;
        })}
        </div>
        <button className="load-more" >
         ytty
        </button>
      </div>
    
  );
};

export default PokemonCardList;