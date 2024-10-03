import { FeatureType, NavLinkType } from "../typescript/types";
import fundIcon from "../assets/icons/fund 1.png";
import paymentIcon from "../assets/icons/operation 1.png";
import exchangeIcon from "../assets/icons/forex 1.png";
import frameIcon from "../assets/icons/frame.png";
import chartIcon from "../assets/icons/chart.png";
import payment2 from "../assets/icons/payment.png";
import webIcon from "../assets/icons/web.png";

export const navLinks: NavLinkType[] = [
  {
    id: "1",
    title: "Home",
    href: "/",
  },
  {
    id: "2",
    title: "What we do",
    href: "#what-we-do",
  },
  {
    id: "3",
    title: "What is DigiKoein?",
    href: "#what-is-digikoein",
  },
  {
    id: "4",
    title: "Remittance",
    href: "#",
  },
  {
    id: "5",
    title: "About",
    href: "#",
  },
];

export const footerLinks: {
  title: string;
  links: {
    id: string;
    title: string;
    href: string;
  }[];
}[] = [
  {
    title: "Legal",
    links: [{ id: "1", title: "Trademarks", href: "#" }],
  },
  {
    title: "Sitemaps",
    links: [
      {
        id: "1",
        title: "Home",
        href: "#",
      },
      {
        id: "2",
        title: "What is Digikoein?",
        href: "#",
      },
      {
        id: "3",
        title: "What is DLT for Future Bank",
        href: "#",
      },
      {
        id: "4",
        title: "Services",
        href: "#",
      },
      {
        id: "5",
        title: "Terms & Conditions",
        href: "#",
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        id: "1",
        title: "Contact",
        href: "#",
      },
      {
        id: "2",
        title: "Blog",
        href: "#",
      },
      {
        id: "3",
        title: "Litepaper",
        href: "#",
      },
      {
        id: "4",
        title: "Community",
        href: "#",
      },
      {
        id: "5",
        title: "Github",
        href: "#",
      },
    ],
  },
];

export const offersContent = [
  {
    id: "1",
    icon: fundIcon,
    title: "Fund Transfer",
    description: [
      {
        id: "1",
        text: `Fund transfer, also known as remittance, involves moving funds
              from one place to another. Traditionally, banks have facilitated
              this process through domestic and international banking networks
              like SWIFT.`,
      },
      {
        id: "2",
        text: `In recent years, remittance companies have emerged, offering
              services under new regulations and using technology such as mobile
              devices. However, these companies face obstacles as they rely on
              the traditional banking infrastructure, which restricts their
              ability to adopt further technological advancements.`,
      },
    ],
    btnText: frameIcon,
  },
  {
    id: "2",
    icon: paymentIcon,
    title: "Payment System",
    description: [
      {
        id: "1",
        text: `Fund transfer, also known as remittance, involves moving funds
              from one place to another. Traditionally, banks have facilitated
              this process through domestic and international banking networks
              like SWIFT.`,
      },
      {
        id: "2",
        text: `In recent years, remittance companies have emerged, offering
              services under new regulations and using technology such as mobile
              devices. However, these companies face obstacles as they rely on
              the traditional banking infrastructure, which restricts their
              ability to adopt further technological advancements.`,
      },
    ],
    btnText: frameIcon,
  },
  {
    id: "3",
    icon: exchangeIcon,
    title: "Currency Exchange",
    description: [
      {
        id: "1",
        text: `Fund transfer, also known as remittance, involves moving funds
              from one place to another. Traditionally, banks have facilitated
              this process through domestic and international banking networks
              like SWIFT.`,
      },
      {
        id: "2",
        text: `In recent years, remittance companies have emerged, offering
              services under new regulations and using technology such as mobile
              devices. However, these companies face obstacles as they rely on
              the traditional banking infrastructure, which restricts their
              ability to adopt further technological advancements.`,
      },
    ],
    btnText: frameIcon,
  },
];

export const features: FeatureType[] = [
  {
    id: "1",
    icon: chartIcon,
    title: "Trade Finance",
    desc: "We offer green financing to help sellers, buyers, and financial institutions facilitate trade as well as create an atmosphere for non-conventional players",
  },
  {
    id: "2",
    icon: payment2,
    title: "Cross-Border Payments",
    desc: "We make the transaction easier between the payer and payee from different countries by ensuring low cost, high speed, unlimited access and sufficient transparency.",
  },
  {
    id: "3",
    icon: webIcon,
    title: "Digital Identity",
    desc: "We can help you build your online presence, and our digital infrastructure will allow financial institutions to validate identities without depending on physical documentation.",
  },
  {
    id: "4",
    icon: chartIcon,
    title: "Clearing and Settlement",
    desc: "We make the clearing and settlement process smoother so financial institutions can send and receive wire transfers multiple times daily.",
  },
  {
    id: "5",
    icon: payment2,
    title: "Provenance ",
    desc: "We offer an immutable and irreversible source of information that can track the true ownership of a product across the supply chain.",
  },
  {
    id: "6",
    icon: webIcon,
    title: "Multi-Party Aggregation",
    desc: "We build a shared master data repository with flexible data modelling capabilities that allow members to inquire about the master data objects and entities.",
  },
  {
    id: "7",
    icon: webIcon,
    title: "Record Keeping",
    desc: "We build a shared master data repository with flexible data modelling capabilities that allow members to inquire about the master data objects and entities.",
  },
  {
    id: "8",
    icon: webIcon,
    title: "Re insurance",
    desc: "We build a shared master data repository with flexible data modelling capabilities that allow members to inquire about the master data objects and entities.",
  },
];
