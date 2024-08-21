import styled from "styled-components";
import { color } from "../../theme";

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

const Main = () => {
  return (
    <Style>
      <h1>STRATAGEM HERO</h1>
      <h3>Enter any Stratagem Input to Start!</h3>
    </Style>
  );
};

export default Main;
