import { stateFightInterface } from "./../../../types/_Reducer/stateFight";
export function pushNewCoordinateFn(
    state: stateFightInterface,
    id: string,
    coordinate: [number, number],
    name: string
) {
    let newCoordinate = [...state.allCoordinates].filter((el) => el.id !== id);

    newCoordinate = [{ id, coordinate, name }, ...newCoordinate];

    return newCoordinate;
}
