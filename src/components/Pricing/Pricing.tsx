import Back from "../common/Back";
import { PriceCard } from "../Home";
import "../Home/Price/price.css";

const Pricing = () => {
  return (
    <>
      <section className="pricing mb">
        <Back
          name="30 days money back guarantee"
          title="No Extra Fees. Friendly Support"
          cover={"/images/pricing.jpg"}
        />
        <div className="price container">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Pricing;
