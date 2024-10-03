import { useState } from "react";
import OfferCard from "../../components/Cards/OfferCard/OfferCard";
import { offersContent } from "../../data/data";

const OfferSection = () => {
  const [cardId, setCardId] = useState<string>("1");
  const handleExpand = (id: string) => {
    setCardId(id);
  };

  return (
    <section className="offer-section">
      <div className="container">
        <h2 className="offer-title">What Do We Offer</h2>
        <div className={`offer-wrapper offer-expanded-${cardId}`}>
          {offersContent.map((offer) => {
            const isExpanded = offer.id === cardId;
            return (
              <OfferCard
                offer={offer}
                key={offer.id}
                handleExpand={handleExpand}
                expanded={isExpanded}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
