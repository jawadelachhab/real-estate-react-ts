import Back from "../common/Back";
import "../Home/Featured/Featured.css";
import { FeaturedCard } from "../Home";

const Services = () => {
  return (
    <>
      <section className="services mb">
        <Back name="Services" title="Services -All Services" cover={"/images/services.jpg"} />
        <div className="featured container">
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Services;
