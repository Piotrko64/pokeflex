import { arrayPokemonInterface } from "./../pokemonTokenData/pokemonInterface";

type emptyOrString = "" | string;

export interface stateFightInterface {
    myTeam: arrayPokemonInterface;
    enemyTeam: boolean;
    whoAttack: emptyOrString;
    whoAttackID: emptyOrString;
    whoIsAttack: emptyOrString;
    whoIsAttackID: emptyOrString;
    whereIsEnemy: any;
    allCoordinates: any;
    grave: arrayPokemonInterface;
    myTokens: any;
    enemyTokens: arrayPokemonInterface;
    yourTurn: boolean;
    whoWin: boolean;
}
