import { useState } from "react";

// 'listObjectRender must be array objects with propert 'name' and 'render''

export default function useSwitch(listObjectsRender, actualRender) {
    const [actualValue, setActualValue] = useState(actualRender);
    function changeRender(value) {
        setActualValue(value);
    }

    const findRender = listObjectsRender.find((el) => el.name === actualValue).render;

    return [findRender, changeRender];
}
