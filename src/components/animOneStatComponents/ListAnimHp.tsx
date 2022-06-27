import { AnimHP } from "./AnimHp";

function ListAnimHP({
    listHp = [],
    deleteHpChange,
}: {
    listHp: Array<number>;
    deleteHpChange: () => void;
}): any {
    return (
        <>
            {listHp.map((el) => (
                <AnimHP key={el} value={el} deleteHpChange={deleteHpChange} />
            ))}
        </>
    );
}
export default ListAnimHP;
