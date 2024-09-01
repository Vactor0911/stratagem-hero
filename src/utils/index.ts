import stratagemData from "../assets/Stratagems.json";

export type Stratagem = {
  name: string;
  category: string;
  command: string;
  path: string;
};

export const getRandStratagems = (count: number) => {
  const stratagems = stratagemData as Stratagem[];
  const filteredStratagems = stratagems.filter(
    (stratagem) => stratagem.command !== "" && stratagem.path !== ""
  );
  const result: Stratagem[] = [];
  for (let i = 0; i < count; i++) {
    const rand = Math.floor(Math.random() * filteredStratagems.length);
    result.push(filteredStratagems[rand]);
  }
  return result;
};

export const getKeyDirection = (key: number) => {
  switch (key) {
    case 87:
    case 38:
    case 104:
      return "U";
    case 83:
    case 40:
    case 101:
      return "D";
    case 65:
    case 37:
    case 100:
      return "L";
    case 68:
    case 39:
    case 102:
      return "R";
    default:
      return "";
  }
};

// 배경음
export const audioVolume = 0.3;
