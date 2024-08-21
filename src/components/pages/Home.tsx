import styled from "styled-components";
import { useState } from "react";
import { color } from "../../theme";
import Main from "../scenes/Main";
import Ready from "../scenes/Ready";
import Clear from "../scenes/Clear";

const Container = styled.div`
  height: calc(100% - 52px - 1rem);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) or (max-height: 700px) {
    font-size: 0.75em;
  }
  @media (max-width: 750px) or (max-height: 500px) {
    font-size: 0.5em;
  }
    @media (max-width: 500px) or (max-height: 360px) {
    font-size: 0.35em;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 80%;
  padding: 10vh 0;
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
    setGameStep("ready");
  };

  return (
    <Container onClick={getReady}>
      <Background>
        {gameStep === "main" && <Main />}
        {gameStep === "ready" && <Ready />}
        {gameStep === "clear" && <Clear />}
      </Background>
    </Container>
  );
};

export default Home;
