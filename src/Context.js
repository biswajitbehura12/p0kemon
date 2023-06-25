import React, { useState,useEffect,useContext } from 'react';


//const  url="https://pokeapi.co/api/v2/pokemon";
const AppContext = React.createContext();
//console.log(url);
const AppProvider = ({children}) => {
 // const [poke, setPoke] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);
  
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
         // console.log(data);
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    await createPokemonObject(data.results);
 
  
  };
  useEffect(() => {
    
    getAllPokemons();

    },[]);

  return (
    <AppContext.Provider
    value={{ allPokemons }} >
    
    {children}
  </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };