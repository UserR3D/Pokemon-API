import { PokemonInfo } from "./declaration";

export const getFetch = async () => {
  try {
    const request = await fetch("https://pokeapi.co/api/v2/");
    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error("error");
  }
};

export const getPokemonInfo = async () => {
  try {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon");
    const response = (await request.json()) as PokemonInfo;
    return response;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed get pokemons infos");
  }
};
