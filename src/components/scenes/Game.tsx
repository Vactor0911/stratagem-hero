import styled from "styled-components";
import { color } from "../../theme";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;

  img {
    aspect-ratio: 1;
  }

  .screen {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .side-container {
    display: flex;
    flex-direction: column;

    h1 {
      color: ${color.yellow};
      font-size: 4em;
    }

    h2 {
      font-size: 3em;
    }
  }

  .main-container {
    width: 70%;
  }

  .left-container {
    text-align: left;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
    }

    .score {
      display: none;
      text-align: right;
    }
  }

  .right-container {
    text-align: right;
  }

  .stratagems {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .stratagems > img {
    width: min(25%, 30vh);
    border: 5px solid ${color.yellow};
  }

  .next-stratagems {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 75%;
    height: 50%;
  }

  .next-stratagems img {
    width: min(100%, 15vh);
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
    padding: 2%;
  }

  .commands img {
    width: min(10%, 10vh);
  }

  .timer {
    background-color: ${color.gray};
    height: 3em;
  }

  // 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
    .screen {
      flex-direction: column;
    }

    .main-container {
      width: 100%;
    }

    .left-container {
      flex-direction: row;
      width: 100%;
    }

    .left-container .score {
      display: flex;
    }

    .right-container {
      display: none;
    }

    .stratagems > img {
      border: 3px solid ${color.yellow};
    }

    .arrow-buttons {
      display: grid;
    }
  }

  // 가로모드 모바일
  @media (max-width: 991px) and (orientation: landscape) {
    flex-direction: row;
    gap: 5%;

    .left-container .score {
      display: flex;
    }

    .right-container {
      display: none;
    }

    .main-container {
      height: 100%;
    }

    .stratagems {
      height: 50%;
    }

    .stratagems > img {
      height: 100%;
    }

    .arrow-buttons {
      display: grid;
      width: 50%;
    }
  }
`;

const ArrowButtons = styled.div`
  display: none;
  width: 80%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5%;
    border: 3px solid white;
    border-radius: 1em;
    background-color: ${color.yellow};
    cursor: pointer;
  }

  img {
    filter: invert(85%);
    width: 80%;
  }

  div:nth-child(1) {
    grid-column: 2;
  }
  div:nth-child(2) {
    grid-row: 2;
    grid-column: 1;
  }
  div:nth-child(3) {
    grid-row: 2;
    grid-column: 2;
  }
  div:nth-child(4) {
    grid-row: 2;
    grid-column: 3;
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
      {/* 메인 화면 */}
      <div className="screen">
        {/* 좌측 컨테이너 */}
        <div className="side-container left-container">
          <div className="round">
            <h2>Round</h2>
            <h1>1</h1>
          </div>
          <div className="score">
            <h1>0</h1>
            <h2>SCORE</h2>
          </div>
        </div>

        {/* 메인 컨테이너 */}
        <div className="main-container">
          {/* 스트라타젬 이미지 */}
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

        {/* 우측 컨테이너 */}
        <div className="side-container right-container">
          <h1>0</h1>
          <h2>SCORE</h2>
        </div>
      </div>

      {/* 모바일 사용자용 입력 버튼 */}
      <ArrowButtons className="arrow-buttons">
        <div>
          <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
        </div>
        <div>
          <img src="./src/assets/arrows/arrow_left.png" alt="arrow_left" />
        </div>
        <div>
          <img src="./src/assets/arrows/arrow_down.png" alt="arrow_down" />
        </div>
        <div>
          <img src="./src/assets/arrows/arrow_right.png" alt="arrow_right" />
        </div>
      </ArrowButtons>
    </Style>
  );
};

export default Game;
