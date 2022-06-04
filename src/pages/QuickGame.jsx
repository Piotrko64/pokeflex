import CompletePlayground from "../components/Playground/CompletePlayground";
import UseQuickGameEnemy from "../hooks/fightHooks/useQuickGameEnemy";

function QuickGame() {
    UseQuickGameEnemy();
    return <CompletePlayground />;
}

export default QuickGame;
