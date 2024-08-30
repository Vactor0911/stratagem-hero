import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { color } from "../../theme";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 20vw;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .score {
    color: ${color.yellow};
    font-size: 4em;
  }

  h1 {
    font-size: 3em;
  }
`;

type GameProps = {
  gameRound: number;
  setGameScene: (scene: string) => void;
  gameScore: number;
  aryBonus: number[];
};

const Clear = ({ gameRound, setGameScene, gameScore, aryBonus }: GameProps) => {
  const [loop, setLoop] = useState(0);
  const intervalId = useRef<number | null>(null);
  useEffect(() => {
    intervalId.current = setInterval(() => {
      setLoop((l: number) => l + 1);
      if (loop > 4 && intervalId.current) {
        clearInterval(intervalId.current);
        const delay = setTimeout(() => {
          setGameScene("ready");
        }, 3000);

        return () => clearTimeout(delay);
      }
    }, 500);
    return () => {
      if (!intervalId.current) return;
      clearInterval(intervalId.current);
    };
  }, [gameRound, loop, setGameScene]);

  return (
    <Style>
      <Container style={{ opacity: loop >= 1 ? "1" : "0" }}>
        <h1>Round Bonus</h1>
        <h1 className="score">{aryBonus[0]}</h1>
      </Container>
      <Container style={{ opacity: loop >= 2 ? "1" : "0" }}>
        <h1>Time Bonus</h1>
        <h1 className="score">{aryBonus[1]}</h1>
      </Container>
      <Container style={{ opacity: loop >= 3 ? "1" : "0" }}>
        <h1>Perfect Bonus</h1>
        <h1 className="score">{aryBonus[2]}</h1>
      </Container>
      <Container style={{ opacity: loop >= 4 ? "1" : "0" }}>
        <h1>Total Score</h1>
        <h1 className="score">{gameScore}</h1>
      </Container>
    </Style>
  );
};

export default Clear;
