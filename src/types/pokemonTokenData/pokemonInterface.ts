export interface PokemonInterface {
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
export type ArrayPokemonInterface = Array<PokemonInterface>;
