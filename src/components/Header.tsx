import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { color } from "../theme";
import GithubButton from "./GithubButton";
import { useState } from "react";

const Style = styled.nav`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0.5rem;
  border-bottom: 2px solid ${color.yellow};
  gap: 1rem;
  background: #252525;

  .icon {
    display: flex;
    align-items: center;
  }

  .right-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    gap: 1rem;
    right: 0.5rem;
    top: 0.5rem;
  }

  .active {
    color: ${color.yellow};
  }

  .menu {
    display: none;
    padding: 0.75rem 0.75rem;
    flex-direction: column;
    justify-content: space-between;
    width: 4rem;
    height: 3rem;
    border: 1px solid white;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .menu span {
    height: 0.2rem;
    width: 100%;
    background-color: white;
    border-radius: 10px;
  }

  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
  }

  li {
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  li:hover {
    color: ${color.yellow};
  }

  li a {
    text-decoration: none;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;

    .menu {
      display: flex;
    }

    ul {
      display: none;
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
      list-style: none;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <header>
      <Style>
        <Link className="icon" to="/">
          <img src="./icon.png" height="50px"></img>
        </Link>
        <div className="right-container">
          <GithubButton />
          <div
            className="menu"
            onClick={() => {
              setMenuOpen(prev => !prev);
              const tabs = document.querySelector(".tabs");
              if (menuOpen) {
                tabs?.classList.add("open");
              }
              else {
                tabs?.classList.remove("open");
              }
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className="tabs">
          <li>
            <NavLink to="/">Stratagem Hero</NavLink>
          </li>
          <li>
            <NavLink to="stratagems">Stratagems</NavLink>
          </li>
        </ul>
      </Style>
    </header>
  );
};

export default Header;
