import styled from "styled-components";
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
  opacity: 0;

  .score {
    color: ${color.yellow};
    font-size: 4em;
  }

  h1 {
    font-size: 3em;
  }
`;

const Clear = () => {

  return (
    <Style>
      <Container>
        <h1>Round Bonus</h1>
        <h1 className="score">100</h1>
      </Container>
      <Container>
        <h1>Time Bonus</h1>
        <h1 className="score">100</h1>
      </Container>
      <Container>
        <h1>Perfect Bonus</h1>
        <h1 className="score">100</h1>
      </Container>
      <Container>
        <h1>Total Bonus</h1>
        <h1 className="score">100</h1>
      </Container>
    </Style>
  );
};

export default Clear;
