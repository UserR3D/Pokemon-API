import { Interface } from "readline";

export type Nullable<T> = T | null;

export type Results<T> = {
  name: string | T;
  url: string;
};

export type Pokedex = {
  results: Results<string>[];
};

export type Types = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}[];

export type BackDefaultSprite = {
  back_default: string;
  back_female: Nullable<string>;
};

export type BackShinySprite = {
  back_shiny: string;
  back_shiny_female: Nullable<string>;
};

export type FrontDefaultSprite = {
  front_default: string;
  front_female: Nullable<string>;
};

export type FrontShinySprite = {
  front_shiny: string;
  front_shiny_female: Nullable<string>;
};

export type PokemonSprites = BackDefaultSprite &
  BackShinySprite &
  FrontDefaultSprite &
  FrontShinySprite & {
    other: {
      dream_world: FrontDefaultSprite;
      home: FrontDefaultSprite & FrontShinySprite;
      "official-artwork": FrontDefaultSprite;
      showdown: BackDefaultSprite &
        BackShinySprite &
        FrontDefaultSprite &
        FrontShinySprite;
    };
    versions: unknown;
  };

export interface Pokemon {
  abilities: {
    ability: Results<string>;
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: Results<string>[];
  game_indices: {
    game_index: number;
    version: Results<string>;
  }[];
  height: number;
  held_items: {
    item: Results<string>;
    version_details: {
      rarity: number;
      version: Results<string>;
    }[];
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: Results<string>;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: Results<string>;
    }[];
  }[];
  name: string;
  order: number;
  species: Results<string>;
  types: Types;
  stats: {
    base_stat: number;
    effort: number;
    stat: Results<
      "attack" | "defense" | "special-attack" | "special-defense" | "speed"
    >;
  }[];
  sprites: PokemonSprites;
  weight: number;
}
