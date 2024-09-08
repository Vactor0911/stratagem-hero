import styled from "styled-components";
import { color } from "../theme";

const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  background: #252525;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  text-decoration: none;
  border: 1px solid white;

  &:hover {
    background: #333333;
    border: 1px solid ${color.yellow};
  }
`;

const GithubButton = () => {
  return (
    <Container
      href="https://github.com/Vactor0911/stratagem-hero"
      target="_blank"
    >
      <img src="./github.svg" alt="github" height="30px"></img>
      <span>Github</span>
    </Container>
  );
};

export default GithubButton;
