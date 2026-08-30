import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/mf-logo.png"

function Footer() {
  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammed-fazil-m-3ba895194/",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/Mohammed-Fazil",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:mothi.mhd.fazil@gmail.com",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-identity">
          <a href="#home" className="footer-logo">
            <img src={logo} alt="Mohammed Fazil" className="footer-logo-image" />
          </a>

          <div className="footer-info">
            <span className="footer-name">Mohammed Fazil</span>
            <span className="footer-role">Software Engineer</span>
          </div>
        </div>

        <div className="footer-socials">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  social.href.startsWith("mailto:") ? undefined : "noreferrer"
                }
                aria-label={social.label}
              >
                <Icon size={17} strokeWidth={1.8} />
              </a>
            );
          })}
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Mohammed Fazil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
