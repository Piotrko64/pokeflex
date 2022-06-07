import { useState } from "react";

// 'listObjectRender must be array objects with propert 'name' and 'render''

export default function useSwitch(listObjectsRender, actualRender, defaultRender) {
    const [actualValue, setActualValue] = useState(actualRender);

    function changeRender(value) {
        setActualValue(value);
    }

    const findObject =
        listObjectsRender.find((el) => el.name === actualValue) ||
        listObjectsRender.find((el) => el.name === defaultRender);

    const toRender = findObject.render;
    const nameRender = findObject.name;

    return [toRender, changeRender, nameRender];
}
