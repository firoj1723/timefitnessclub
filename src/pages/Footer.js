import React from 'react';
import './Footer.css'; // Assuming you will add the custom CSS here

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Contact Section */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="footer-heading">Contact Us</h5>
            <p className="footer-text">
              1st Floor SK Tower Lalsot Road<br />
              Dausa, Raj., ZIP Code 303303<br />
              <i className="fas fa-phone-alt"></i> Phone: <a href="tel:+919166885705" className="footer-link">+919166885705</a> & <a href="tel:+919887200003" className="footer-link">+919887200003</a><br />
              <i className="fas fa-envelope"></i> Email: <a href="mailto:timesgroup_tcg@yahoo.in" className="footer-link">timesgroup_tcg@yahoo.in</a>
            </p>
          </div>

          {/* Map Section */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="footer-heading">Our Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7116.422839269534!2d76.32859703906922!3d26.896784574884496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d8df7c6fcc83d%3A0xfa7f43b70ca5011a!2sTime%20Fitness%20club!5e0!3m2!1sen!2sin!4v1731672363220!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>

          {/* Developed By Section */}
          <div className="col-12 col-md-4">
            <h5 className="footer-heading">Developed By</h5>
            <p className="footer-text">
              Developed with <span className="footer-heart">♥</span> by{' '}
              <a href="https://www.f2fdev.in" className="footer-link" target="_blank" rel="noopener noreferrer">
                F2F Developers
              </a>.
            </p>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="text-center mt-4">
          <h5 className="footer-heading">Connect With Us</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com/faraz.dausa" target="_blank" rel="noopener noreferrer" className="footer-icon mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/timefitnessclub" target="_blank" rel="noopener noreferrer" className="footer-icon mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/919887200003" target="_blank" rel="noopener noreferrer" className="footer-icon mx-2">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-3 border-top border-light mt-3">
        <p className="mb-0">© 2024 TimeFitness Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
