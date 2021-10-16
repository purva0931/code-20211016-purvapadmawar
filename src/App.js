import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import products from "./Data/CarDetails";
import CarCarousel from "./Car-Carousel/CarCarousel";
import GridView from "./Product/GridView";

function App() {
  return (
    <div className="App">
      <Header heading="Car Catalog" />
      <CarCarousel products={products} />
      <GridView products={products} />
      <Footer />
    </div>
  );
}

export default App;
