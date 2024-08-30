import styled from "styled-components";
import { color } from "../../theme";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 100%;

  .game-container {
    display: flex;
    justify-content: space-around;
    width: 90vw;
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

  .data-container {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .align-left {
    text-align: left;
  }

  .align-right {
    text-align: right;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60vw;
    height: 100%;
  }

  .main-top {
    display: flex;
    flex-direction: column;
  }

  .stratagems,
  .next-stratagems,
  .commands {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .stratagems {
    justify-content: space-between;
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  #this-stratagem-icon {
    width: 15vw;
    border: 5px solid ${color.yellow};
  }

  .next-stratagems {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50%;
  }

  .next-stratagems img {
    width: 18%;
  }

  .stratagem-name {
    font-size: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: ${color.yellow};
  }

  .commands img {
    width: 7vw;
  }

  .timer {
    width: 100%;
    height: 3em;
    background-color: ${color.gray};
  }

  .time-left {
    width: 100%;
    height: 100%;
    background-color: ${color.yellow};
    z-index: 1;
  }

  // 화살표 버튼 컨테이너
  .button-container {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  .button-bottom {
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  .button-container img {
    border: 3px solid white;
    border-radius: 10px;
    background-color: ${color.yellow};
    width: 20vw;
    max-width: 90px;
    height: 20vw;
    max-height: 90px;
  }

  // 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
    justify-content: space-between;

    .main-container {
      justify-content: left;
      gap: 2em;
    }

    #this-stratagem-icon {
      width: 20vw;
      border-width: 3px;
    }

    .next-stratagems img {
      width: auto;
      height: 12vw;
    }

    #rest-icons {
      display: none;
    }

    .button-container {
      display: flex;
    }
  }

  // 가로모드 모바일
  @media (max-width: 991px) and (orientation: landscape) {
    justify-content: space-between;
    flex-direction: row;

    .side-container {
      justify-content: space-between;
    }

    .side-container .score {
      display: flex;
    }

    .game-container {
      flex-direction: row;
    }

    .main-container {
      width: 40vw;
    }

    .data-container {
      display: flex;
    }

    .game-container .side-container {
      display: none;
    }

    #this-stratagem-icon {
      width: auto;
      height: 20vh;
      max-height: 120px;
      border-width: 3px;
    }

    .next-stratagems img {
      width: auto;
      height: 12vh;
      max-height: 80px;
    }

    #rest-icons {
      display: none;
    }

    .commands img {
      width: 5vw;
    }

    .button-container {
      display: flex;
    }

    .button-container img {
      width: 10vw;
      height: 10vw;
    }
  }
`;

const Game = () => {
  return (
    <Style>
      <div className="data-container">
        <div className="side-container align-left">
          <h2>Round</h2>
          <h1>99999</h1>
        </div>
        <div className="side-container align-right">
          <h1>99999</h1>
          <h2>Score</h2>
        </div>
      </div>
      <div className="game-container">
        {/* 좌측 컨테이너 */}
        <div className="side-container align-left">
          <h2>Round</h2>
          <h1>99999</h1>
        </div>
        {/* 중앙 컨테이너 */}
        <div className="main-container">
          <div className="main-top">
            <div className="stratagems">
              {/* 현재 스트라타젬 아이콘 */}
              <img
                src="./src/assets/stratagems/hellbomb.png"
                alt="hellbomb"
                id="this-stratagem-icon"
              />
              <div className="next-stratagems">
                {/* 다음 스트라타젬 아이콘 배열 */}
                <img
                  src="./src/assets/stratagems/hellbomb.png"
                  alt="hellbomb"
                />
                <img
                  src="./src/assets/stratagems/hellbomb.png"
                  alt="hellbomb"
                />
                <img
                  src="./src/assets/stratagems/hellbomb.png"
                  alt="hellbomb"
                />
                <img
                  src="./src/assets/stratagems/hellbomb.png"
                  alt="hellbomb"
                  id="rest-icons"
                />
                <img
                  src="./src/assets/stratagems/hellbomb.png"
                  alt="hellbomb"
                  id="rest-icons"
                />
              </div>
            </div>
            <h1 className="stratagem-name">
              {/* 스트라타젬 이름 */}
              Hellbomb
            </h1>
          </div>
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
          </div>
          <div className="timer">
            <div className="time-left" />
          </div>
        </div>
        {/* 우측 컨테이너 */}
        <div className="side-container align-right">
          <h1>99999</h1>
          <h2>Score</h2>
        </div>
      </div>
      <div className="button-container">
        <img src="./src/assets/arrows/arrow_up.png" alt="arrow_up" />
        <div className="button-bottom">
          <img src="./src/assets/arrows/arrow_left.png" alt="arrow_left" />
          <img src="./src/assets/arrows/arrow_down.png" alt="arrow_down" />
          <img src="./src/assets/arrows/arrow_right.png" alt="arrow_right" />
        </div>
      </div>
    </Style>
  );
};

export default Game;
