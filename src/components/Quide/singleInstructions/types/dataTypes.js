const dataTypes = [
    {
        name: "Electro",
        description: "Your pokemon gain 1 points of revenge",
        color: `background-color: rgba(255, 224, 143, 1);
    background-image: linear-gradient(
        141deg,
        rgba(255, 224, 143, 1) 0%,
        rgba(175, 133, 68, 1) 20%,
        rgba(179, 112, 44, 1) 77%,
        rgba(255, 224, 180, 1) 100%
    );`,
    },
    {
        name: "Turbo Electro",
        description:
            "The attacked pokemon loses as many speed points as your pokemon has revenge. Then your pokemon gets **+1** revenge",
        color: `background: rgb(215,167,91);
background: radial-gradient(circle, rgba(215,167,91,1) 0%, rgba(179,122,44,1) 46%, rgba(213,164,95,1) 100%);`,
    },
    {
        name: "Water",
        description: "Your pokemon's gain 1 point hp with exception pokemon who attacked",
        color: `background: rgb(37, 186, 209);
    background: linear-gradient(180deg, rgba(37, 186, 209, 1) 24%, rgba(44, 34, 221, 1) 84%);`,
    },
    {
        name: "Grass",
        description: "Your hp will not be reduced by revenge points",
        color: `background: rgb(58, 172, 47);
    background: linear-gradient(
        106deg,
        rgba(58, 172, 47, 1) 0%,
        rgba(58, 97, 4, 1) 48%,

        rgba(146, 203, 2, 1) 100%
    );`,
    },
    {
        name: "Fire",
        description: "Your type change on 'Turbo Fire' ",
        color: `background-color: rgba(255, 0, 0, 1);
    background-image: linear-gradient(
        181deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(125, 30, 30, 1) 0%,
        rgba(193, 147, 95, 1) 100%,
        rgba(239, 176, 110, 1) 100%
    );`,
    },
    {
        name: "Turbo Fire",
        description:
            "When you attack deal **3** points of damage enemy pokemon. Next change your type on 'Fire' ",
        color: ` background: rgb(255, 0, 0);
    background: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 19%,
        rgba(101, 5, 16, 1) 50%,
        rgba(255, 70, 0, 1) 100%
    );`,
    },
    {
        name: "Normal",
        description: "You gain **4** points of speed and enemy loses **4** points of speed",
        color: `background: rgb(107, 39, 70);
    background: linear-gradient(90deg, rgba(107, 39, 70, 1) 0%, rgba(45, 80, 117, 1) 100%);`,
    },
    {
        name: "Psychic",
        description: "Block the attacked pokemon",
        color: `background: rgb(199, 28, 63);
    background: radial-gradient(circle, rgba(199, 28, 63, 1) 35%, rgba(24, 51, 187, 1) 96%);`,
    },
    {
        name: "Ice",
        description: "If you don't have **Blizzard** token you get **Blizzard** token",
        color: `background: rgb(41, 55, 186);
    background: radial-gradient(
        circle,
        rgba(41, 55, 186, 1) 3%,
        rgba(44, 73, 191, 1) 46%,
        rgba(0, 170, 255, 1) 94%
    );`,
    },

    {
        name: "Rock",
        description: "If you don't have 2 or more tokens you get **Shield Stone** token",
        color: ` background: rgb(135, 135, 135);
    background: linear-gradient(90deg, rgba(135, 135, 135, 1) 0%, rgba(25, 30, 36, 1) 100%);
`,
    },
    {
        name: "Blocked",
        description: "Zero effects",
        color: `background: rgb(156, 156, 156);
    background: linear-gradient(
        137deg,
        rgba(156, 156, 156, 1) 8%,
        rgba(42, 22, 24, 1) 45%,
        rgba(126, 120, 117, 1) 91%
    );
`,
    },
];
export default dataTypes;
