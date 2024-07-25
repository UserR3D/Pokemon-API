import { Pokemon } from "@/types/declaration";
import Box from "./Box";

const PokemonsBox = async () => {
  const responses = [] as Pokemon[];
  for (let i = 1; i < 20; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const response = (await res.json()) as Pokemon;
    responses.push(response);
  }
  return (
    <>
      {responses.map((item) => (
        <Box
          key={item.id}
          name={item.name}
          front_default={item.sprites.front_default}
          types={item.types}
        />
      ))}
    </>
  );
};

export default PokemonsBox;
