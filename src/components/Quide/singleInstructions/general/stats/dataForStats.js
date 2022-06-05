import { BsFillHeartFill, BsFillShieldFill } from "react-icons/bs";
import { GiBroadsword, GiZeusSword, GiSpikes } from "react-icons/gi";
import { RiSpeedFill } from "react-icons/ri";
const dataForStats = [
    {
        name: "HP",
        logo: <BsFillHeartFill />,
        description: "Shows how much hp a Pokemon has left. If it is low on hp it will be highlighted.",
    },
    {
        name: "DEFENSE",
        logo: <BsFillShieldFill />,
        description: `Pokémon that you attack with your Pokémon always lose **1 point of defense**. 
        If the opponent's defense is zero, the Pokémon you attack will also activate a **special ability** depending on its type.
        Exceptions to this are types with the prefix **Turbo**, which activate regardless of the number of defense points`,
    },
    {
        name: "ATTACK",
        logo: <GiBroadsword />,
        description: `Attacked opponent loses as much **hp** as you have attack points,
         unless your Pokémon has a special attack activated,
          in which case the opponent will lose as much hp as you have special attack points instead`,
    },
    {
        name: "SPECIAL ATTACK",
        logo: <GiZeusSword />,
        description: `If your Pokemon has less or the same amount of **hp** as speed points,
         a special attack is activated. From now on, the attacked enemy will lose as much HP as you have points in **special attack**`,
    },
    {
        name: "REVENGE",
        logo: <GiSpikes />,
        description: `When attacking an enemy Pokémon,
         your Pokémon can also take damage!
         You are subtracted as many hp points as your opponent had **revenge** points`,
    },
    {
        name: "SPEED",
        logo: <RiSpeedFill />,
        description: `If your hp is equal to or less than your speed points, you will now attack with a **special attack** instead of a normal attack`,
    },
];

export default dataForStats;
