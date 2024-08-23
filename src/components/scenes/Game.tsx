import styled from "styled-components";
import { color } from "../../theme";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  .screen {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .stratagems {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .stratagems img {
    width: max(25%, 10vh);
  }

  .next-stratagems {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    height: 50%;
  }

  .next-stratagems li {
    height: 100%;
  }

  .next-stratagems img {
    width: 100%;
    height: 100%;
  }

  .stratagem-name {
    color: black;
    font-size: 4em;
    background-color: ${color.yellow};
  }

  .commands {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }

  .commands img {
    height: 5vw;
  }

  .timer{
    background-color: ${color.gray};
    height: 2em;
  }

  @media (max-width: 767px) {
    .screen {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;

  div {
    display: flex;
    flex-direction: column;
  }

  .score {
    display: none;
    text-align: right;
  }

  h1 {
    font-size: 4em;
    color: ${color.yellow};
  }

  h2 {
    font-size: 3em;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 1rem;

    .score {
      display: flex;
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  h1 {
    font-size: 4em;
    color: ${color.yellow};
  }

  h2 {
    font-size: 3em;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const ArrowContainer = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  img:nth-child(1) {
    grid-column: 2;
  }
  img:nth-child(2) {
    grid-row: 2;
    grid-column: 1;
  }
  img:nth-child(3) {
    grid-row: 2;
    grid-column: 2;
  }
  img:nth-child(4) {
    grid-row: 2;
    grid-column: 3;
  }

  @media (max-width: 767px) {
    display: grid;
  }
`;

const aryStratagem = [
  { name: "Hellbomb", command: "DULDURDU", path: "hellbomb.png" },
  { name: "Machine Gun", command: "DLDUR", path: "machine_gun.png" },
  {
    name: "Autocannon Sentry",
    command: "DURULU",
    path: "autocannon_sentry.png",
  },
  { name: "Orbital Laser", command: "RDURD", path: "orbital_laser.png" },
  { name: "Eagle Airstrike", command: "URDR", path: "eagle_airstrike.png" },
  { name: "Autocannon", command: "DLDUUR", path: "autocannon.png" },
  { name: "Eagle 500kg Bomb", command: "URDDD", path: "eagle_500kg_bomb.png" },
];

const nextStratagems = aryStratagem.slice(1, 6).map((stratagem, index) => {
  return (
    <li key={index}>
      <img
        src={"./src/assets/stratagems/" + stratagem.path}
        alt={stratagem.name}
      />
    </li>
  );
});

const commands = aryStratagem[0].command.split("").map((char, index) => {
  switch (char) {
    case "U":
      char = "arrow_up";
      break;
    case "D":
      char = "arrow_down";
      break;
    case "L":
      char = "arrow_left";
      break;
    case "R":
      char = "arrow_right";
      break;
  }
  return (
    <img src={"./src/assets/arrows/" + char + ".png"} alt={char} key={index} />
  );
});

const Game = () => {
  return (
    <Style>
      <div className="screen">
        <LeftContainer>
          <div className="round">
            <h2>Round</h2>
            <h1>1</h1>
          </div>
          <div className="score">
            <h1>0</h1>
            <h2>SCORE</h2>
          </div>
        </LeftContainer>
        <div className="main-container">
          <div className="stratagems">
            <img
              src="./src/assets/stratagems/hellbomb.png"
              alt="hellbomb.png"
            />
            <ul className="next-stratagems">{nextStratagems}</ul>
          </div>
          <h1 className="stratagem-name">Hellbomb</h1>
          <div className="commands">{commands}</div>
          <div className="timer"></div>
        </div>
        <RightContainer>
          <h1>0</h1>
          <h2>SCORE</h2>
        </RightContainer>
      </div>
      <ArrowContainer>
        {/* 모바일 사용자용 입력 버튼 */}
        <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
        <img src="./src/assets/arrows/arrow_left.png" alt="arrow_left" />
        <img src="./src/assets/arrows/arrow_down.png" alt="arrow_down" />
        <img src="./src/assets/arrows/arrow_right.png" alt="arrow_right" />
      </ArrowContainer>
    </Style>
  );
};

export default Game;
