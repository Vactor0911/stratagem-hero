import styled from "styled-components";
import { color } from "../../theme";
import { useEffect } from "react";
import { getKeyDirection } from "../../utils";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:before {
    content: "";
    height: 3em;
  }

  h1 {
    font-size: 7em;
  }

  h3 {
    font-size: 3em;
    color: ${color.yellow};
  }
`;

type GameProps = {
  getReady: () => void;
  setGameRound: (round: number) => void;
  setGameScore: (score: number) => void;
};

const Main = ({ getReady, setGameRound, setGameScore }: GameProps) => {
  const handleKeyDown = (e: { keyCode: number }) => {
    if (getKeyDirection(e.keyCode)) {
      getReady();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    setGameRound(1);
    setGameScore(0);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, setGameRound, setGameScore]);

  return (
    <Style>
      <h1>STRATAGEM HERO</h1>
      <h3>Enter any Stratagem Input to Start!</h3>
    </Style>
  );
};

export default Main;
