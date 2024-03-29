import { PokemonInterface } from "../../../@types/pokemonTokenData/PokemonInterface";
import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

const MORE_HP = 16;

export default function fountain(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = JSON.parse(JSON.stringify(state));

    if (AI) {
        const newStateMyTeam = [...newState.enemyTeam];
        let thisFriendPokemon = newStateMyTeam.sort((a, b) => {
            return b.hp - a.hp;
        })[0];
        thisFriendPokemon = { ...thisFriendPokemon, type: "Water", hp: thisFriendPokemon.hp + MORE_HP };
        const thisFriendPokemonIndex = newState.enemyTeam.findIndex(
            (el: PokemonInterface) => el.id === thisFriendPokemon.id
        );
        const enemyTeam = newState.enemyTeam;
        enemyTeam[thisFriendPokemonIndex] = thisFriendPokemon;

        return { ...state, enemyTeam };
    }
    const newStateMyTeam = [...newState.myTeam];

    let thisFriendPokemon = newStateMyTeam.sort((a, b) => {
        return b.hp - a.hp;
    })[0];
    thisFriendPokemon = { ...thisFriendPokemon, type: "Water", hp: thisFriendPokemon.hp + MORE_HP };
    const thisFriendPokemonIndex = newState.myTeam.findIndex(
        (el: PokemonInterface) => el.id === thisFriendPokemon.id
    );
    const myTeam = newState.myTeam;
    myTeam[thisFriendPokemonIndex] = thisFriendPokemon;

    return { ...state, myTeam };
}
