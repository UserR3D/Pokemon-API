import { Pokemon } from "@/types/declaration";
import { Box } from "./Box";

let endPoints: string[] = [];
for (let i = 1; i < 40; i++) {
  endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}

const PokemonsBox = async () => {
  return endPoints.map(async (item) => {
    const res = await fetch(item);
    const response = (await res.json()) as Pokemon;
    return (
      <Box
        key={response.id}
        name={response.name}
        image={response.sprites.front_default}
        types={response.types}
      />
    );
  });
};

export default PokemonsBox;
