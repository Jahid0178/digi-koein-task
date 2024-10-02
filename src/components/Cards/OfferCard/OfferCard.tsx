import { OfferCardType } from "../../../typescript/types";

interface OfferCardProps {
  offer: OfferCardType;
}

const OfferCard = ({ offer }: OfferCardProps) => {
  return (
    <div
      className={`offer-card ${
        offer?.description?.length > 0 ? "" : "transparent"
      }`}
    >
      <img
        src={offer.icon}
        alt="fund"
      />
      <h3>{offer.title}</h3>

      {offer.description &&
        offer.description.map((desc) => <p key={desc.id}>{desc.text}</p>)}

      {offer.btnText && (
        <div className="offer-btn-wrapper">
          <button className="icon-btn">
            <img
              src={offer.btnText}
              alt="frame-icon"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default OfferCard;
