export interface pokemonInterface {
    id?: string;
    idAward?: string;
    image: string;
    name: string;
    type: string;
    hp: number;
    attack: number;
    specialAttack: number;
    speed: number;
    defense: number;
    revenge: number;
}
export type arrayPokemonInterface = Array<pokemonInterface>;
