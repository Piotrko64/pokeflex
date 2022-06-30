import { ReactElement } from "react-markdown/lib/react-markdown";

export interface OneTokenInterface {
    id: string;
    idAward?: string;
    badForAI?: boolean;
    name: string;
    icon: ReactElement;
    functionToken: any;
    desc: string;
}
export type ArrayTokenInterface = Array<OneTokenInterface>;
