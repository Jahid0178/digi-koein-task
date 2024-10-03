import { OfferCardType } from "../../../typescript/types";

interface OfferCardProps {
  offer: OfferCardType;
  handleExpand: (id: string) => void;
  expanded: boolean;
}

const OfferCard = ({ offer, handleExpand, expanded }: OfferCardProps) => {
  return (
    <div className={`offer-card ${expanded ? "" : "transparent"}`}>
      <img
        src={offer.icon}
        alt="fund"
      />
      <h3>{offer.title}</h3>

      {expanded &&
        offer.description.map((desc) => <p key={desc.id}>{desc.text}</p>)}

      {!expanded && (
        <div className="offer-btn-wrapper">
          <button
            className="icon-btn"
            onClick={() => handleExpand(offer.id)}
          >
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
