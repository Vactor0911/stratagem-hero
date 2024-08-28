import stratagemData from "../assets/Stratagems.json";

export type Stratagem = {
    name: string,
    category: string,
    command: string,
    path: string,
}

export const getRandStratagems = (count: number) => {
  const stratagems = stratagemData as Stratagem[];
  const result: Stratagem[] = [];
  for (let i = 0; i < count; i++) {
    const rand = Math.floor(Math.random() * stratagems.length);
    result.push(stratagems[rand]);
  }
  return result;
};
