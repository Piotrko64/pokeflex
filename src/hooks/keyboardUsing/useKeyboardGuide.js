import { useEffect } from "react";

export function useKeyboardGuide(fn) {
    function handleEscape(e) {
        const { key } = e;
        if (key === "Escape") {
            fn(false);
        } else if (key === "p" || key === "q") {
            fn((state) => !state);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);
}
