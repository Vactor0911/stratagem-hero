import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid white;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: 1rem;
  gap: 2rem;
  text-transform: uppercase;
`;

const StyledStrong = styled.strong`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: #ffd700;
  }
`;

const Header = () => {
  return (
    <header style={{ background: "#404040" }}>
      <StyledNav>
        <div style={{ display: "flex" }}>
          <img src="./src/assets/icon.png" alt="Logo" height="50px"></img>
          <Ul>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <StyledStrong>Stratagem Hero</StyledStrong>
              </Link>
            </li>
            <li>
              <Link to={"/how-to-play"} style={{ textDecoration: "none" }}>
                <StyledStrong>How To Play</StyledStrong>
              </Link>
            </li>
            <li>
              <Link to={"/stratagems"} style={{ textDecoration: "none" }}>
                <StyledStrong>Stratagems</StyledStrong>
              </Link>
            </li>
          </Ul>
        </div>
        <a
          href="https://github.com/Vactor0911/stratagem-hero"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <StyledStrong>Github</StyledStrong>
        </a>
      </StyledNav>
    </header>
  );
};

export default Header;
