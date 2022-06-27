export function pushNewCoordinateFn(state, id, coordinate, name) {
    let newCoordinate = [...state.allCoordinates].filter((el) => el.id !== id);

    newCoordinate = [{ id, coordinate, name }, ...newCoordinate];

    return newCoordinate;
}
