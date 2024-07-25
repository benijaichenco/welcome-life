function Footer() {
  const contacts = {
    gra: {
      name: "Graciela",
      phone: "+972 54-463-9204",
      email: "gra1324@gmail.com",
    },
    fabian: {
      name: "Fabien",
      phone: "+972 54-480-7629",
      email: "fitussi10@gmail.com",
    },
  };
  return (
    <footer className="footer eng-text">
      <div className="footer-top">
        <div className="container">
          <div className="footer-name eng-title">{contacts.gra.name}:</div>
          <div className="footer-contact-container">
            <div className="footer-phone">
              <span className="title">Tel: </span>
              <a href="tel:+972507879082">{contacts.gra.phone}</a>
            </div>
            <div className="footer-email">
              <span className="title">Email: </span>
              <a href={`mailto:${contacts.gra.email}`} className="footer-email">
                {contacts.gra.email}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-name eng-title">{contacts.fabian.name}:</div>
          <div className="footer-contact-container">
            <div className="footer-phone">
              <span className="title">Tel: </span>
              <a href="tel:+972507879082">{contacts.fabian.phone}</a>
            </div>
            <div className="footer-email">
              <span className="title">Email: </span>
              <a href={`mailto:${contacts.fabian.email}`}>{contacts.fabian.email}</a>
            </div>
          </div>
        </div>
      </div>
      {/* option to change language here */}
    </footer>
  );
}

export default Footer;
