export default function checkWin(award) {
    const { pokemons, tokens } = award;

    const localPokemons = JSON.parse(localStorage.getItem("pokemonsAward"));
    const localTokens = JSON.parse(localStorage.getItem("tokensAward"));

    if (
        localPokemons?.find((el) => el === pokemons?.idAward) ||
        localTokens?.find((el) => el === tokens?.idAward)
    ) {
        return true;
    }
}
