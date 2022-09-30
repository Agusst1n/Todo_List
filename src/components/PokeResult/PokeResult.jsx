function PokeResult(poke) {
  const img = poke.poke.sprites.other.dream_world.front_default;
  const { name } = poke.poke;
  const nameMayus = name.charAt(0).toUpperCase();
  const lastName = nameMayus + name.substring(1);
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src={img} alt="" width={200} />
      <p>{lastName}</p>
    </div>
  );
}

export default PokeResult;
