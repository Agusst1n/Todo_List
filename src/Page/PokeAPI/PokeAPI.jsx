import { useContext } from 'react';
import PokeForm from '../../components/PokeForm/PokeForm';
import PokeResult from '../../components/PokeResult/PokeResult';
import PokeApiContext from '../../context/PokeApiContext';

function PokeAPI() {
  const { pokemons } = useContext(PokeApiContext);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-2 overflow-x-hidden bg-neutral-900">
      <h1 className="font-bold">
        Poke
        <span className="text-green-600 font-bold">API</span>
      </h1>
      <PokeForm />
      <div>
        {pokemons?.map((pkmon) => (
          <PokeResult poke={pkmon} key={pkmon.id} />
        ))}
      </div>
    </div>
  );
}

export default PokeAPI;
