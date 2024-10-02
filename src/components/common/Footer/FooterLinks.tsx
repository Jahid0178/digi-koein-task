import { footerLinks } from "../../../data/data";

const FooterLinks = () => {
  return (
    <>
      {footerLinks.map((footerLink) => (
        <div key={footerLink.title}>
          <h3 className="footer-link-title">{footerLink.title}</h3>
          <ul className="footer-links-wrapper">
            {footerLink.links.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterLinks;
