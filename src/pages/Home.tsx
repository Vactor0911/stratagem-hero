import styled from "styled-components";
import { useState } from "react";
import { Main, Ready, Clear, GameOver, Game } from "../components/scenes";

const Container = styled.div`
  height: calc(100% - 52px - 1rem);
  display: flex;
  justify-content: center;
  align-items: center;

  // 모바일 세로
  @media all and (max-width: 479px) {
    font-size: 0.3rem;
  }

  // 모바일 가로 & 테블릿 세로
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 0.5rem;
  }

  // 테블릿 가로
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.75rem;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 80%;
  padding: 7vh 0;
  border: solid white;
  border-width: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  text-align: center;

  /* background */
  background-image: url("./src/assets/superEarthEmblem.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-origin: content-box;
`;

const Home = () => {
  const [gameScene, setGameScene] = useState("main");
  const [gameRound, setGameRound] = useState(1);
  const [gameScore, setGameScore] = useState(0);

  const getReady = () => {
    if (gameScene !== "main") {
      return;
    }
    setGameScene("ready");
  };

  return (
    <Container onClick={getReady}>
      <Background>
        {gameScene === "main" && <Main getReady={getReady} />}
        {gameScene === "ready" && (
          <Ready gameRound={gameRound} setGameScene={setGameScene} />
        )}
        {gameScene === "game" && (
          <Game
            setGameScene={setGameScene}
            setGameRound={setGameRound}
            gameRound={gameRound}
            gameScore={gameScore}
            setGameScore={setGameScore}
          />
        )}
        {gameScene === "clear" && <Clear gameRound={gameRound} />}
        {gameScene === "gameover" && (
          <GameOver setGameScene={setGameScene} gameScore={gameScore} />
        )}
      </Background>
    </Container>
  );
};

export default Home;
