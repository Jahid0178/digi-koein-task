import Logo from "../Logo/Logo";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content-wrapper">
          <div className="footer-logo-wrapper">
            <Logo />
            <p>
              DIGI KOEIN is embarking on a groundbreaking initiative to
              revolutionize the remittance and payment services sector by
              harnessing the power of blockchain technology.
            </p>
            <p className="copyright">DIGIKOEIN {new Date().getFullYear()} ©</p>
          </div>
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
