import { arrayTokenInterface, oneTokenInterface } from "../pokemonTokenData/tokenInterface";
import { arrayPokemonInterface } from "./../pokemonTokenData/pokemonInterface";

type emptyOrString = "" | string;

export interface stateFightInterface {
    myTeam: arrayPokemonInterface;
    enemyTeam: boolean;
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
    whoWin: boolean;
}
export type oneCoordinate = { id: string; name: string; coordinate: [number] };
