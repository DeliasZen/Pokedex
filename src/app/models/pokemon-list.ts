export interface PokemonList{
  name: string;
  url: string;
}

export interface PokemonsData {
  count: number;
  results: PokemonList[];
}