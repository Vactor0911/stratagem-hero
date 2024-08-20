import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1>이건 헤더</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/how-to-play"}>How To Play</Link>
      <Link to={"/stratagems"}>Stratagems</Link>
    </nav>
  );
};

export default Header;
