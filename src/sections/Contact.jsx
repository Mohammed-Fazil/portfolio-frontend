import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactLink from "../components/ContactLink";

function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "mothi.mhd.fazil@gmail.com",
      href: "mailto:mothi.mhd.fazil@gmail.com",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mohammed-fazil-m-3ba895194",
      href: "https://www.linkedin.com/in/mohammed-fazil-m-3ba895194/",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/Mohammed-Fazil",
      href: "https://github.com/Mohammed-Fazil",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <p className="section-label">CONTACT</p>

          <h2 className="contact-title">
            Let's build something
            <br />
            <span>great together.</span>
          </h2>

          <p className="contact-description">
            I'm open to new opportunities and interesting projects.
          </p>

          <a
            href="mailto:mothi.mhd.fazil@gmail.com"
            className="contact-email-button"
          >
            Email Me
            <Mail size={18} />
          </a>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <ContactLink key={link.label} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
