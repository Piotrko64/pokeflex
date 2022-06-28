import { useSelectorStateFight } from "./../../../_Reducer/selectors/useSelectorStateFight";
import { RefObject, useEffect } from "react";
import { useDispatch } from "react-redux";
import { pushCoordinate } from "../../../_Reducer/StateFight";
import { pokemonInterface } from "../../../types/pokemonTokenData/pokemonInterface";

const UsePushCoordinates = (value: pokemonInterface, pokemonRef: RefObject<HTMLDivElement>) => {
    const { myTeam, enemyTeam } = useSelectorStateFight();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            pushCoordinate({
                id: value.id,
                coordinate: [
                    pokemonRef.current?.getBoundingClientRect().x,
                    pokemonRef.current?.getBoundingClientRect().y,
                ],
                name: value.name,
            })
        );
        setTimeout(() => {
            if (!pokemonRef) {
                return;
            }
            dispatch(
                pushCoordinate([
                    value.id,
                    [
                        pokemonRef.current?.getBoundingClientRect().x,
                        pokemonRef.current?.getBoundingClientRect().y,
                    ],
                    value.name,
                ])
            );
        }, 1000);
    }, [myTeam.length, enemyTeam.length]);
};

export default UsePushCoordinates;
