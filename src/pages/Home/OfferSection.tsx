import OfferCard from "../../components/Cards/OfferCard/OfferCard";
import { offersContent } from "../../data/data";

const OfferSection = () => {
  return (
    <section className="offer-section">
      <div className="container">
        <h2 className="offer-title">What Do We Offer</h2>
        <div className="offer-wrapper">
          {offersContent.map((offer) => (
            <OfferCard
              offer={offer}
              key={offer.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
