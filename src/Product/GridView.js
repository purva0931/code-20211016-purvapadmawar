import GridItem from "./GridItem";
import Style from "./GridView.module.css";

const GridView = ({ products }) => {
  return (
    <div className={Style.gridview}>
      {Array.isArray(products) &&
        products.map((product) => (
          <GridItem
            key={product.id}
            id={product.id}
            artist={product.artist}
            accentColor={product.accentColor}
            backgroundColor={product.backgroundColor}
            description={product.description}
            heroImage={product.image1}
            thumbnail={product.image2}
            isFree={product.isFree}
            price={
              product.isFree
                ? "FREE"
                : product.price === undefined
                ? "Not Confirmed"
                : product.price
            }
            textColor={product.textColor}
            title={product.title}
          />
        ))}
    </div>
  );
};

export default GridView;
