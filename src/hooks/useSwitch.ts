import { objectRender } from "./../types/hooks/switch";
import { useState } from "react";

// 'listObjectRender must be array objects with propert 'name' and 'render''
export function useSwitch(
    listObjectsRender: Array<objectRender>,
    actualRender: string,
    defaultRender: string
) {
    const [actualValue, setActualValue] = useState<string>(actualRender);

    function changeRender(value: string) {
        setActualValue(value);
    }

    const findObject: objectRender =
        listObjectsRender.find((objRen) => objRen.name === actualValue) ||
        listObjectsRender.find((objRen) => objRen.name === defaultRender)!;

    const toRender = findObject.render as any;
    const nameRender: string = findObject.name;

    return [toRender, changeRender, nameRender];
}
