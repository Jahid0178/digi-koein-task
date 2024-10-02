export type NavLinkType = {
  id: string;
  title: string;
  href: string;
};

export type OfferCardType = {
  id: string;
  icon: string;
  title: string;
  description: {
    id: string;
    text: string;
  }[];
  btnText?: string;
};

export type FeatureType = {
  id: string;
  icon: string;
  title: string;
  desc: string;
};
