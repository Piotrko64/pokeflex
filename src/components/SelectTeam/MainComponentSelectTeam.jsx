import MainComponentScrollPokemons from "./components/ScrollPokemons/MainComponentScrollPokemons";
import MainComponentScrollTokens from "./components/ScrollTokens/MainComponentScrollTokens";
import SelectTeamMain from "./components/SelectTeam/SelectTeamMain";

function MainComponentSelectTeam() {
    return (
        <>
            <MainComponentScrollPokemons />
            <MainComponentScrollTokens />
            <SelectTeamMain />
        </>
    );
}
export default MainComponentSelectTeam;
