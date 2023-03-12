import { Props } from "react-confetti";
import { BackButton } from "./BackButton";

export const MainComponentLayoutRouting = ({ children }: Props) => {
    return (
        <>
            <BackButton />

            {children}
        </>
    );
};
