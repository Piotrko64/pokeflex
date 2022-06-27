import CompletePlayground from "../components/Playground/CompletePlayground";
import { useQuickGameEnemy } from "../hooks/fightHooks/useQuickGameEnemy";

function QuickGame() {
    useQuickGameEnemy();
    return <CompletePlayground />;
}

export default QuickGame;
