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

type GameProps = {
  gameRound: number;
};

const Ready = ({ gameRound }: GameProps) => {
  return (
    <Style>
      <h1>GET READY</h1>
      <div>
        <h3>Round</h3>
        <h2>{gameRound}</h2>
      </div>
    </Style>
  );
};

export default Ready;
