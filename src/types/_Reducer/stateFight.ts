import { ArrayTokenInterface } from "../pokemonTokenData/TokenInterface";
import { ArrayPokemonInterface } from "../pokemonTokenData/PokemonInterface";

type EmptyOrString = "" | string;

export interface StateFightInterface {
    myTeam: ArrayPokemonInterface;
    enemyTeam: ArrayPokemonInterface;
    whoAttack: EmptyOrString;
    whoAttackID: EmptyOrString;
    whoIsAttack: EmptyOrString;
    whoIsAttackID: EmptyOrString;
    whereIsEnemy: Array<number>;
    allCoordinates: Array<OneCoordinate>;
    grave: ArrayPokemonInterface;
    myTokens: ArrayTokenInterface;
    enemyTokens: ArrayTokenInterface;
    yourTurn: boolean;
    whoWin: string | false;
}
export type OneCoordinate = { id: string; name: string; coordinate: [number, number] };
