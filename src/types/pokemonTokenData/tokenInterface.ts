import { ReactElement } from "react-markdown/lib/react-markdown";

export interface oneTokenInterface {
    id: string;
    idAward?: string;
    badForAI?: boolean;
    name: string;
    icon: ReactElement;
    functionToken?: any;
    desc: string;
}
export type arrayTokenInterface = Array<oneTokenInterface>;
