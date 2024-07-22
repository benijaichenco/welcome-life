function Footer() {
  const contacts = {
    gra: {
      name: "Graciela",
      phone: "+972 54-463-9204",
      email: "gra1324@gmail.com",
    },
    fabian: {
      name: "Fabian",
      phone: "+972 54-480-7629",
      email: "fitussi10@gmail.com",
    },
  };
  return (
    <footer className="footer eng-text">
      <div className="footer-left">
        <div className="container">
          <div className="footer-name eng-title">{contacts.gra.name}:</div>
          <div className="footer-contact-container">
            <div className="footer-phone">Tel: {contacts.gra.phone}</div>
            <a href={`mailto:${contacts.gra.email}`} className="footer-email">
              Email: {contacts.gra.email}
            </a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="container">
          <div className="footer-name eng-title">{contacts.fabian.name}:</div>
          <div className="footer-contact-container">
            <div className="footer-phone">Tel: {contacts.fabian.phone}</div>
            <a href={`mailto:${contacts.fabian.email}`} className="footer-email">
              Email: {contacts.fabian.email}
            </a>
          </div>
        </div>
      </div>
      {/* option to change language here */}
    </footer>
  );
}

export default Footer;
