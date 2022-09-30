import { useState, createContext } from 'react';

const PokeApiContext = createContext();

function PokeApiProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);

  return (
    <PokeApiContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokeApiContext.Provider>
  );
}

export { PokeApiProvider };

export default PokeApiContext;
