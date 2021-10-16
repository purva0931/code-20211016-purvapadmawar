import Style from "./GridItem.module.css";

const GridItem = (props) => {
  return (
    <a href="#">
      <div
        className={Style.item}
        style={{
          borderLeft: `solid 3px ${props.accentColor}`,
          backgroundColor: props.backgroundColor,
        }}
      >
        <img
          src={props.thumbnail}
          className={Style.imgStyle}
          alt={props.title}
        />
        <p style={{ color: "white" }}>{props.title}</p>
        <p
          className={Style.priceStyle}
          style={{ backgroundColor: props.accentColor }}
        >
          &#8377; {props.price}
        </p>
      </div>
    </a>
  );
};

export default GridItem;
