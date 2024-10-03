import { FeatureType } from "../../../typescript/types";

interface FeaturedCardProps {
  feature: FeatureType;
}

const FeaturedCard = ({ feature }: FeaturedCardProps) => {
  return (
    <div className="featured-card">
      <div className="featured-icon-wrapper">
        <img
          src={feature.icon}
          alt={feature.title}
        />
      </div>
      <div className="featured-content-wrapper">
        <h3>{feature.title}</h3>
        <p>{feature.desc}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
