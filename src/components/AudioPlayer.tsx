type AudioPlayerProps = {
  src: string;
  loop?: boolean;
};

const AudioPlayer = ({ src, loop = false }: AudioPlayerProps) => {
  return (
    <audio src={src} autoPlay={true} className="audio" loop={loop}></audio>
  );
};

export default AudioPlayer;
