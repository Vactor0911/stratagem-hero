import styled from "styled-components";
import { color } from "../../theme";
import { useEffect } from "react";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:before {
    content: "";
    height: 7em;
  }

  h1 {
    font-size: 7em;
  }

  h3 {
    font-size: 3em;
  }

  h2 {
    font-size: 4em;
    color: ${color.yellow};
  }
`;

type GameProps = {
  setGameScene: (scene: string) => void;
  gameScore: number;
};

const GameOver = ({ setGameScene, gameScore }: GameProps) => {
  useEffect(() => {
    const delay = setTimeout(() => {
      setGameScene("main");
      clearTimeout(delay);
    }, 6000)

    return () => clearTimeout(delay);
  }, []);

  return (
    <Style>
      <h1>GAME OVER</h1>
      <div>
        <h3>YOUR FINAL SCORE</h3>
        <h2>{gameScore}</h2>
      </div>
    </Style>
  );
};

export default GameOver;
