import { arrayTokenInterface, oneTokenInterface } from "../pokemonTokenData/tokenInterface";
import { arrayPokemonInterface } from "./../pokemonTokenData/pokemonInterface";

type emptyOrString = "" | string;

export interface stateFightInterface {
    myTeam: arrayPokemonInterface;
    enemyTeam: arrayPokemonInterface;
    whoAttack: emptyOrString;
    whoAttackID: emptyOrString;
    whoIsAttack: emptyOrString;
    whoIsAttackID: emptyOrString;
    whereIsEnemy: Array<number>;
    allCoordinates: Array<oneCoordinate>;
    grave: arrayPokemonInterface;
    myTokens: arrayTokenInterface;
    enemyTokens: arrayTokenInterface;
    yourTurn: boolean;
    whoWin: string | boolean;
}
export type oneCoordinate = { id: string; name: string; coordinate: [number, number] };
