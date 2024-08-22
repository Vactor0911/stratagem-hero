import styled from "styled-components";
import { color } from "../../theme";

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

const GameOver = () => {
  return (
    <Style>
      <h1>GAME OVER</h1>
      <div>
        <h3>YOUR FINAL SCORE</h3>
        <h2>0</h2>
      </div>
    </Style>
  );
};

export default GameOver;
