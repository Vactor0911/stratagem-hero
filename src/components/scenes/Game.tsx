import styled from "styled-components";
import { color } from "../../theme";
import { useState, useEffect, useMemo, useCallback } from "react";
import { Stratagem, getKeyDirection, getRandStratagems } from "../../utils";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;

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
    height: 100%;
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
    height: 50%;
  }

  .stratagems > img {
    width: min(25%, 30vh);
  }

  .stratagems > img::before {
    content: "asd";
  }

  .next-stratagems {
    display: flex;
    align-items: center;
    list-style: none;
    width: 75%;
    height: 50%;
  }

  .next-stratagems li {
    height: 100%;
  }

  .next-stratagems img {
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
    padding: 2%;
  }

  .commands img {
    width: min(10%, 10vh);
  }

  .timer {
    background-color: ${color.gray};
    height: 3em;
  }

  .timer #timeLeft {
    width: 100%;
    height: 100%;
    background-color: ${color.yellow};
  }

  // 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
    .screen {
      flex-direction: column;
      justify-content: left;
    }

    .main-container {
      width: 100%;
      height: 45%;
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
      border-width: 3px;
    }

    .next-stratagems {
      justify-content: space-around;
    }

    .arrow-buttons {
      display: grid;
    }
  }

  // 가로모드 모바일
  @media (max-width: 991px) and (orientation: landscape) {
    flex-direction: row;
    gap: 5%;

    .screen {
      height: 100%;
    }

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

type GameProps = {
  setGameScene: (scene: string) => void;
  setGameRound: (round: number) => void;
  gameRound: number;
  gameScore: number;
  setGameScore: (score: number) => void;
};

const Game = ({
  setGameScene,
  setGameRound,
  gameRound,
  gameScore,
  setGameScore,
}: GameProps) => {
  const TOTAL_TIME = 10000;
  const INTERVAL = 10;
  const [time, setTime] = useState(TOTAL_TIME);
  const WARNING_TIME = 20;

  // 타이머
  const [timePercentage, setTimePercentage] = useState(100);
  useEffect(() => {
    const timeLeft = document.getElementById("timeLeft");
    const timer = setInterval(() => {
      // setTime((t) => t - INTERVAL);
      setTimePercentage((time / TOTAL_TIME) * 100);
      timeLeft!.style.width = `${timePercentage}%`;
      timeLeft!.style.backgroundColor = `${
        timePercentage <= WARNING_TIME ? color.red : color.yellow
      }`;
    }, INTERVAL);

    if (time <= 0) {
      clearInterval(timer);
      setGameScene("gameover");
    }

    // 클리너
    return () => clearInterval(timer);
  }, [setGameScene, time]);

  // 스트라타젬
  const [stratagems, setStratagem] = useState(getRandStratagems(gameRound + 5));

  // 키 입력
  const [commandIndex, setCommandIndex] = useState(0);

  const handleKeyDown = useCallback(
    (e: { keyCode: number }) => {
      const keyDirection = getKeyDirection(e.keyCode);
      if (keyDirection === "") {
        // 잘못된 키 입력
        return;
      }

      if (keyDirection === stratagems[0].command[commandIndex]) {
        setCommandIndex((cmdIdx) => cmdIdx + 1);
        console.log(commandIndex);
        if (commandIndex === stratagems[0].command.length - 1) {
          setGameScore(++gameScore);
          setStratagem((stratagem) => {
            stratagem.shift();
            return stratagem;
          });
          setCommandIndex(0);
        }
      }
    },
    [commandIndex, stratagems]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Style>
      {/* 메인 화면 */}
      <div className="screen">
        {/* 좌측 컨테이너 */}
        <div className="side-container left-container">
          <div className="round">
            <h2>Round</h2>
            <h1>{gameRound}</h1>
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
              src={"./src/assets/stratagems/" + stratagems[0].path}
              alt={stratagems[0].name}
              style={{
                borderColor:
                  timePercentage <= WARNING_TIME ? color.red : color.yellow,
              }}
            />
            <ul className="next-stratagems" style={{}}>
              {stratagems.slice(1, 6).map((stratagem, index) => {
                return (
                  <li key={index}>
                    <img
                      src={"./src/assets/stratagems/" + stratagem.path}
                      alt={stratagem.name}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <h1
            className="stratagem-name"
            style={{
              backgroundColor:
                timePercentage <= WARNING_TIME ? color.red : color.yellow,
            }}
          >
            {stratagems[0].name}
          </h1>
          <div className="commands">
            {stratagems[0].command.split("").map((char, index) => {
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
                <img
                  src={"./src/assets/arrows/" + char + ".png"}
                  alt={char}
                  key={index}
                />
              );
            })}
          </div>
          <div className="timer">
            <div id="timeLeft"></div>
          </div>
        </div>

        {/* 우측 컨테이너 */}
        <div className="side-container right-container">
          <h1>{gameScore}</h1>
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
