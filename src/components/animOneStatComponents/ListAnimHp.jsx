import { AnimHP } from "./AnimHp";

function ListAnimHP({ listHp, deleteHpChange }) {
    return (
        <>
            {listHp.map((el) => (
                <AnimHP key={el} value={el} deleteHpChange={deleteHpChange} />
            ))}
        </>
    );
}
export default ListAnimHP;
