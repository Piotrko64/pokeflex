import { useEffect } from "react";

export function useDevicesInformation() {
    useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            alert("This game was created for desktop devices!");
        }

        console.log("%cATTENTION!", "color: red; font-size:40px");
        console.log(
            "%cRemember! This game is only for desktop devices (not for small screens or mobile devices).",
            "color: red; font-size:25px"
        );
    }, []);
}
