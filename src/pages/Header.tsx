import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { color } from "../theme";
import GithubButton from "../components/GithubButton";
import { useState } from "react";

const RightMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  gap: 1rem;
  right: 0.5rem;
  top: 0.5rem;
`;

const HambergerMenu = styled.div`
  display: none;
  padding: 0.75rem 0.75rem;
  flex-direction: column;
  justify-content: space-between;
  width: 4rem;
  height: 3rem;
  border: 1px solid white;
  border-radius: 0.25rem;
  cursor: pointer;

  span {
    height: 0.2rem;
    width: 100%;
    background-color: white;
    border-radius: 10px;
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: 1.5rem;

  li {
    list-style: none;
  }
`;

const MyLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const MyNavLink = styled(NavLink)`
  font-size: 1.25rem;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${color.yellow};
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavBar = styled.nav`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    padding: 0.5rem;
    border-bottom: 2px solid ${color.yellow};
    gap: 1rem;
    background: #252525;

    .active {
      color: ${color.yellow};
    }

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: start;

      .menu {
        display: flex;
      }

      ul {
        display: ${menuOpen ? "flex" : "none"};
        flex-direction: column;
        width: 100%;
        padding: 0.5rem 0;
        position: absolute;
        left: 0;
        top: calc(50px + 1rem - 2px);
        background: #252525;
        border-bottom: 2px solid ${color.yellow};
      }

      ul.open {
        display: flex;
      }

      ul li {
        display: block;
        width: 100%;
        text-align: center;
      }
    }
  `;

  return (
    <header>
      <NavBar>
        <MyLink to="/">
          <img src="./src/assets/icon.png" height="50px"></img>
        </MyLink>
        <RightMenu>
          <GithubButton />
          <HambergerMenu
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </HambergerMenu>
        </RightMenu>
        <Ul>
          <li>
            <MyNavLink to="/">Stratagem Hero</MyNavLink>
          </li>
          <li>
            <MyNavLink to="how-to-play">How To Play</MyNavLink>
          </li>
          <li>
            <MyNavLink to="stratagems">Stratagems</MyNavLink>
          </li>
        </Ul>
      </NavBar>
    </header>
  );
};

export default Header;
