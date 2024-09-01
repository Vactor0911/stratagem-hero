import styled from "styled-components";
import { color } from "../../theme";
import { useEffect } from "react";
import AudioPlayer from "../AudioPlayer";
import { audioVolume } from "../../utils";

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
  setGameScene: (scene: string) => void;
};

const Ready = ({ gameRound, setGameScene }: GameProps) => {
  // 딜레이
  useEffect(() => {
    const timer = setTimeout(() => {
      setGameScene("game");
      clearTimeout(timer);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setGameScene]);

  // 배경음
  useEffect(() => {
    const audio = document.querySelector(".audio") as HTMLAudioElement;
    audio.volume = audioVolume;
  }, []);

  return (
    <Style>
      <h1>GET READY</h1>
      <div>
        <h3>Round</h3>
        <h2>{gameRound}</h2>
      </div>
      {/* 배경음 */}
      {gameRound === 1 && (
        <AudioPlayer src="./src/assets/sounds/game_start.ogg" />
      )}
      {gameRound !== 1 && (
        <AudioPlayer src="./src/assets/sounds/level_start.ogg" />
      )}
    </Style>
  );
};

export default Ready;
