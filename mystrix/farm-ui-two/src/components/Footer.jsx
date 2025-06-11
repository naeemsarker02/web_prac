import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart, FaArrowRight } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Footer.css';

import logo from '/logo/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Initialize animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.footer-column, .footer-bottom').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="modern-footer">
      {/* Animated background elements */}
      <div className="footer-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <div className="footer-container">
        {/* Main footer content */}
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-column brand-column">
            <div className="footer-logo"><img src={logo} alt="" width={200} /></div>
            <p className="brand-description">
              We create digital experiences that innovate and inspire. Our team delivers excellence in every pixel.
            </p>
            <div className="social">
            <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF />
                <span className="hover-effect"></span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
                <span className="hover-effect"></span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
                <span className="hover-effect"></span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
                <span className="hover-effect"></span>
              </a>             
            </div>
          </div>

          {/* Links column */}
          <div className="footer-column">
            <h3 className="column-title">Quick Links</h3>
            <ul className="footer-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FaArrowRight className="link-arrow" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <FaArrowRight className="link-arrow" />
                  <span>About</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FaArrowRight className="link-arrow" />
                  <span>Blog</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <FaArrowRight className="link-arrow" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="footer-column">
            <h3 className="column-title">Contact Info</h3>
            <ul className="contact-info">
              <li className="contact-item">
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <div className="contact-text">
                  <span>Dakkhinpara, Dakshinkhan</span>
                  <span>Airport, Dhaka-1230</span>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <FiMail />
                </div>
                <div className="contact-text">
                  <span>Email</span>
                  <span>mystrixit@gmail.com</span>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <div className="contact-text">
                  <span>+880 1763-088973</span>
                  <span>Mon-Fri: 9am-6pm</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="footer-column newsletter-column">
            <h3 className="column-title">Offer</h3>
            <p className="newsletter-description">
              Follow us to get updates on our latest products and special offers.
            </p>
            <form className="newsletter-form">
              <div className="input-group">
                
              </div>
            </form>
            <div className="payment-methods">
              <div className="payment-icon">Visa</div>
              <div className="payment-icon">Mastercard</div>
              <div className="payment-icon">PayPal</div>
              <div className="payment-icon">Apple Pay</div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; copyright {currentYear} mystrix_it. All Rights Reserved.
            </p>
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
              <a href="#" className="legal-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;