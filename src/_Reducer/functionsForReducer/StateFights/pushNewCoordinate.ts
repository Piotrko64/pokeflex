import { StateFightInterface } from "../../../@types/_Reducer/StateFight";
export function pushNewCoordinateFn(
    state: StateFightInterface,
    id: string,
    coordinate: [number, number],
    name: string
) {
    let newCoordinate = [...state.allCoordinates].filter((el) => el.id !== id);

    newCoordinate = [{ id, coordinate, name }, ...newCoordinate];

    return newCoordinate;
}
