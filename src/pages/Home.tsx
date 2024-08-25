import styled from "styled-components";
import { useState } from "react";
import Main from "../components/scenes/Main";
import Ready from "../components/scenes/Ready";
import Clear from "../components/scenes/Clear";
import GameOver from "../components/scenes/GameOver";
import Game from "../components/scenes/Game";

const Container = styled.div`
  height: calc(100% - 52px - 1rem);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) or (max-height: 750px) {
    font-size: 0.75em;
  }
  @media (max-width: 750px) or (max-height: 600px) {
    font-size: 0.5em;
  }
  @media (max-width: 500px) or (max-height: 450px) {
    font-size: 0.3em;
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
  const [gameStep, setGameStep] = useState("main");
  const [gameStage, setGameStage] = useState(1);

  const getReady = () => {
    if (gameStep !== "main") {
      return;
    }

    setGameStep("ready");
    const timer = setInterval(() => {
      setGameStep("game");
      clearInterval(timer);
    }, 3000);
  };

  return (
    <Container onClick={getReady}>
      <Background>
        {gameStep === "main" && <Main />}
        {gameStep === "ready" && <Ready />}
        {gameStep === "clear" && <Clear />}
        {gameStep === "gameover" && <GameOver />}
        {gameStep === "game" && <Game />}
      </Background>
    </Container>
  );
};

export default Home;
