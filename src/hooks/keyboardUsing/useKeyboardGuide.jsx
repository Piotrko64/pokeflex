import { useEffect } from "react";

export default function useKeyboardGuide(fn) {
    function handleEscape(e) {
        const { key } = e;
        if (key === "Escape") {
            fn(false);
        } else if (key === "p" || key === "q") {
            fn((e) => !e);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEscape);
    }, []);

    return;
}
