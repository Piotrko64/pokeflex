import { useSelectorStateFight } from "./../../../_Reducer/selectors/useSelectorStateFight";
import { RefObject, useEffect } from "react";
import { pokemonInterface } from "../../../types/pokemonTokenData/pokemonInterface";

const UseYourAttack = (value: pokemonInterface, pokemonRef: RefObject<HTMLDivElement>) => {
    const { whoAttackID, whereIsEnemy } = useSelectorStateFight();

    useEffect(() => {
        if (value.id === whoAttackID) {
            const coordinateX = +whereIsEnemy[0] - +pokemonRef.current!.getBoundingClientRect().x;

            const coordinateY = +whereIsEnemy[1] - +pokemonRef.current!.getBoundingClientRect().y;

            pokemonRef.current!.style.zIndex = `999`;
            pokemonRef.current!.style.transform = `translateX(${coordinateX}px) translateY(${coordinateY}px)`;

            setTimeout(() => {
                if (!pokemonRef) {
                    return;
                }

                pokemonRef.current!.style.zIndex = `9`;
                pokemonRef.current!.style.transform = `translateX(0px) translateY(0px)`;
            }, 200);
        }
    }, [whereIsEnemy]);
};

export default UseYourAttack;
