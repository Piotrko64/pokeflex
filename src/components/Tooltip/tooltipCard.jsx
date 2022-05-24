import CardPokemon from "../pokemon/CardPokemon";

function TooltipCard({ value }) {
    return (
        <>
            <CardPokemon value={value} versionMini />
        </>
    );
}
export default TooltipCard;
