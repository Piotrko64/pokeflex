export interface PokemonInterface {
    readonly id?: string;
    readonly idAward?: string;
    readonly image: string;
    readonly name: string;
    type: string;
    hp: number;
    attack: number;
    specialAttack: number;
    speed: number;
    defense: number;
    revenge: number;
}
export type ArrayPokemonInterface = Array<PokemonInterface>;
