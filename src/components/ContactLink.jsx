function ContactLink({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="contact-link"
    >
      <span className="contact-link-icon">
        <Icon size={18} strokeWidth={1.8} />
      </span>

      <span className="contact-link-content">
        <span className="contact-link-label">{label}</span>
        <span className="contact-link-value">{value}</span>
      </span>

      <span className="contact-link-arrow">↗</span>
    </a>
  );
}

export default ContactLink;
