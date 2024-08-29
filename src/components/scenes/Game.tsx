import styled from "styled-components";
import { color } from "../../theme";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 100%;

  .game-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }

  .side-container {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 3.5em;
      color: ${color.yellow};
      overflow: hidden;
    }

    h2 {
      font-size: 2.5em;
    }
  }

  .side-container .score {
    display: none;
  }

  .align-left {
    text-align: left;
  }

  .align-right {
    text-align: right;
  }

  .main-container {
    display: grid;
    grid-template-rows: 40fr 15fr 35fr 10fr;
    grid-template-columns: 1fr;
    height: 100%;
  }

  .stratagems,
  .next-stratagems,
  .commands {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .stratagems {
    justify-content: space-between;
    grid-row: 1;
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .icon-border {
    border: 5px solid ${color.yellow};
  }

  .icon-wrapper > img {
    height: 100%;
  }

  .next-stratagems {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50%;
  }

  .next-stratagems > img {
    height: 100%;
  }

  .stratagem-name {
    grid-row: 2;
    font-size: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: ${color.yellow};
  }

  .commands {
    grid-row: 3;
  }

  .commands img {
    height: 50%;
  }

  .timer {
    grid-row: 4;
    background-color: ${color.gray};
  }

  .time-left {
    width: 100%;
    height: 100%;
    background-color: ${color.yellow};
    z-index: 1;
  }

  @media (max-width: 1450px) {
    .next-stratagems .icon-wrapper:nth-child(5) {
      display: none;
    }
  }

  @media (max-width: 1300px) {
    .next-stratagems .icon-wrapper:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 1150px) {
    .next-stratagems .icon-wrapper:nth-child(3) {
      display: none;
    }
  }
`;

const Game = () => {
  return (
    <Style>
      <div className="game-container">
        {/* 좌측 컨테이너 */}
        <div className="side-container">
          <div className="round align-left">
            <h2>Round</h2>
            <h1>1</h1>
          </div>
          <div className="score align-right">
            <h1>0</h1>
            <h2>Score</h2>
          </div>
        </div>
        {/* 중앙 컨테이너 */}
        <div className="main-container">
          <div className="stratagems">
            {/* 현재 스트라타젬 아이콘 */}
            <div className="icon-wrapper icon-border">
              <img src="./src/assets/stratagems/hellbomb.png" alt="hellbomb" />
            </div>
            <div className="next-stratagems">
              {/* 다음 스트라타젬 아이콘 배열 */}
              <div className="icon-wrapper">
                <img
                  src="./src/assets/stratagems/hellbomb.png"
                  alt="hellbomb"
                />
              </div>
              <div className="icon-wrapper">
                <img
                  src="./src/assets/stratagems/hellbomb.png"
                  alt="hellbomb"
                />
              </div>
              <div className="icon-wrapper">
                <img
                  src="./src/assets/stratagems/hellbomb.png"
                  alt="hellbomb"
                />
              </div>
              <div className="icon-wrapper">
                <img
                  src="./src/assets/stratagems/hellbomb.png"
                  alt="hellbomb"
                />
              </div>
              <div className="icon-wrapper">
                <img
                  src="./src/assets/stratagems/hellbomb.png"
                  alt="hellbomb"
                />
              </div>
            </div>
          </div>
          <h1 className="stratagem-name">
            {/* 스트라타젬 이름 */}
            Hellbomb
          </h1>
          <div className="commands">
            {/* 커맨드 요소 */}
            <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
            <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
            <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
            <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
            <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
            <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
            <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
            <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
            <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
            <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
          </div>
          <div className="timer">
            <div className="time-left" />
          </div>
        </div>
        {/* 우측 컨테이너 */}
        <div className="side-container align-right">
          <h1>0</h1>
          <h2>Score</h2>
        </div>
      </div>
      <div className="button-container"></div>
    </Style>
  );
};

export default Game;
