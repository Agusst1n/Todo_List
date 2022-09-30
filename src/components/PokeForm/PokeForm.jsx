import { useContext, useState } from 'react';
import PokeApiContext from '../../context/PokeApiContext';

function PokeForm() {
  const [pokeName, setPokeName] = useState('');
  const { setPokemons } = useContext(PokeApiContext);

  const getPokemon = async (pokemon) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_POKEAPI}${pokemon}`);
      const data = await res.json();
      console.log(data);
      setPokemons([data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.value.toLowerCase().trim();
    setPokeName(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pokeName === '') {
      console.log('vacio');
      return;
    }

    getPokemon(pokeName);
  };

  return (
    <form
      className="w-5/6 h-10 flex items-center justify-between gap-2 md:w-7/12 "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full h-full outline-none"
        placeholder="Search your pokemon"
        value={pokeName}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PokeForm;
