import Style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={Style.heading}>
      <h1>{props.heading}</h1>
    </header>
  );
};

export default Header;
