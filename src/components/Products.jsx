import Airpods from "./productComponents/Airpods";
import Ipad from "./productComponents/Ipad";
import Ipadpro from "./productComponents/Ipadpro";
import Iphone from "./productComponents/Iphone";
import Macbook from "./productComponents/Macbook";
import Trade from "./productComponents/Trade";

const Products = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-[11px] mt-1">
      <Ipad />
      <Iphone />
      <Macbook />
      <Ipadpro />
      <Airpods />
      <Trade />
    </section>
  );
};

export default Products;
