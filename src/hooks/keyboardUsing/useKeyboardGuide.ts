import { useEffect } from "react";

export function useKeyboardGuide(fn: React.Dispatch<React.SetStateAction<boolean>>) {
    function handleEscape(event: KeyboardEvent) {
        const { key } = event;
        if (key === "Escape") {
            fn(false);
        } else if (key === "p" || key === "q") {
            fn((state: boolean) => !state);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);
}
