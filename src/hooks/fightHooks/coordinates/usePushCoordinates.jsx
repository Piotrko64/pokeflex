import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushCoordinate } from "../../../_Reducer/StateFight";

const UsePushCoordinates = (value, pokemonRef) => {
    const allMyTeam = useSelector((state) => state.StateFightsReducer.myTeam);
    const allEnemyTeam = useSelector((state) => state.StateFightsReducer.enemyTeam);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            pushCoordinate(
                value.id,
                [pokemonRef.current.getBoundingClientRect().x, pokemonRef.current.getBoundingClientRect().y],
                value.name
            )
        );
        setTimeout(() => {
            if (!pokemonRef.current) {
                return;
            }
            dispatch(
                pushCoordinate([
                    value.id,
                    [
                        pokemonRef.current.getBoundingClientRect().x,
                        pokemonRef.current.getBoundingClientRect().y,
                    ],
                    value.name,
                ])
            );
        }, 1000);
    }, [allMyTeam.length, allEnemyTeam.length]);
};

export default UsePushCoordinates;
