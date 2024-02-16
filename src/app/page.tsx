import { Pokemon } from "@/types/declaration";
import PokemonsBox from "@/components/pokemonsBox";
import React from "react";

let endPoints: string[] = [];
for (let i = 1; i < 4; i++) {
  endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}

const page = () => {
  return <PokemonsBox />;
};

export default page;
