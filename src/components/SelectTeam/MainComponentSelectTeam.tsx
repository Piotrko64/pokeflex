import ButtonsComponent from "./components/ButtonsComponent";
import MainComponentScrollPokemons from "./components/ScrollPokemons/MainComponentScrollPokemons";
import MainComponentScrollTokens from "./components/ScrollTokens/MainComponentScrollTokens";
import SelectTeamMain from "./components/SelectTeam/SelectTeamMain";

export function MainComponentSelectTeam() {
    return (
        <>
            <MainComponentScrollPokemons />
            <MainComponentScrollTokens />
            <SelectTeamMain />
            <ButtonsComponent />
        </>
    );
}
