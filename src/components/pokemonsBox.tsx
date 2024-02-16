import { Pokemon } from "@/types/declaration";
let endPoints: string[] = [];
for (let i = 1; i < 4; i++) {
  endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}

const PokemonsBox = async () => {
  return endPoints.map(async (item) => {
    const res = await fetch(item);
    const response = (await res.json()) as Pokemon;
    return <div key={response.id}>{response.name}</div>;
  });
};

export default PokemonsBox;
