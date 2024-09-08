import styled from "styled-components";
import { color } from "../theme";
import { getStratagems } from "../utils";
import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from "../components/Arrows";

const Style = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;

  .container {
    width: 70vw;
    min-width: 300px;
    max-width: 500px;
    padding: 20px 30px;
    border: 2px solid white;
    border-radius: 10px;
    text-align: center;
    background-color: ${color.black};
    z-index: -1;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .content {
  }

  #seperator {
    width: 100%;
    height: 10px;
    border-radius: 3px;
    background: repeating-linear-gradient(
      -45deg,
      lightgray 0,
      lightgray 5px,
      gray 5px,
      gray 9px
    );
  }

  .blue {
    color: ${color.stratagem_blue};
  }
  .yellow {
    color: ${color.stratagem_yellow};
  }
  .green {
    color: ${color.stratagem_green};
  }
  .red {
    color: ${color.stratagem_red};
  }
`;

const StratagemCard = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  text-align: left;

  img {
    height: 70px;
  }

  #yellow-line {
    width: 3px;
    height: auto;
    background-color: ${color.yellow};
  }

  .commands {
    display: flex;
    align-items: center;
  }

  .commands svg {
    height: 30px;
  }

  // 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
    flex-direction: column;
    text-align: center;

    #yellow-line {
      width: auto;
      height: 3px;
    }

    .commands {
      justify-content: center;
    }
  }
`;

type StratagemType = {
  name: string;
  category: string;
  command: string;
  path: string;
};

const getStratagemCard = (stratagem: StratagemType, color: string) => {
  return (
    <StratagemCard>
      <img
        src={"./stratagems/" + stratagem.path}
        alt={stratagem.name}
      ></img>
      <div id="yellow-line" />
      <div className="data">
        <h2 className={color}>{stratagem.name}</h2>
        <div className="commands">
          {stratagem.command.split("").map((char: string) => {
            switch (char) {
              case "U":
                return <ArrowUp color={"white"} />;
              case "D":
                return <ArrowDown color={"white"} />;
              case "L":
                return <ArrowLeft color={"white"} />;
              case "R":
                return <ArrowRight color={"white"} />;
            }
          })}
        </div>
      </div>
    </StratagemCard>
  );
};

const Stratagems = () => {
  return (
    <Style>
      {/* Backpacks */}
      <div className="container">
        <h1 className="blue">Supply: Backpacks</h1>
        <div id="seperator"></div>
        {getStratagems("Backpacks").map((stratagem) => {
          return getStratagemCard(stratagem, "blue");
        })}
      </div>

      {/* Support Weapons */}
      <div className="container">
        <h1 className="blue">Supply: Support Weapons</h1>
        <div id="seperator"></div>
        {getStratagems("SupportWeapons").map((stratagem) => {
          return getStratagemCard(stratagem, "blue");
        })}
      </div>

      {/* Vehicles */}
      <div className="container">
        <h1 className="blue">Supply: Vehicles</h1>
        <div id="seperator"></div>
        {getStratagems("Vehicles").map((stratagem) => {
          return getStratagemCard(stratagem, "blue");
        })}
      </div>

      {/* Mission */}
      <div className="container">
        <h1 className="yellow">Mission</h1>
        <div id="seperator"></div>
        {getStratagems("Mission").map((stratagem) => {
          return getStratagemCard(stratagem, "yellow");
        })}
      </div>

      {/* Defensive */}
      <div className="container">
        <h1 className="green">Defensive</h1>
        <div id="seperator"></div>
        {getStratagems("Defensive").map((stratagem) => {
          return getStratagemCard(stratagem, "green");
        })}
      </div>

      {/* Orbital */}
      <div className="container">
        <h1 className="red">Offensive: Orbital</h1>
        <div id="seperator"></div>
        {getStratagems("Orbital").map((stratagem) => {
          return getStratagemCard(stratagem, "red");
        })}
      </div>

      {/* Eagle */}
      <div className="container">
        <h1 className="red">Offensive: Eagle</h1>
        <div id="seperator"></div>
        {getStratagems("Eagle").map((stratagem) => {
          return getStratagemCard(stratagem, "red");
        })}
      </div>
    </Style>
  );
};

export default Stratagems;
