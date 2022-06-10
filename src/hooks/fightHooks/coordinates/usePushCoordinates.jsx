import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushCoordinate } from "../../../_Reducer/StateFight";

const UsePushCoordinates = (value, pokemonRef) => {
    const AllMyTeam = useSelector((state) => state.StateFightsReducer.myTeam);
    const AllEnemyTeam = useSelector((state) => state.StateFightsReducer.enemyTeam);

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
    }, [AllMyTeam.length, AllEnemyTeam.length]);
};

export default UsePushCoordinates;
