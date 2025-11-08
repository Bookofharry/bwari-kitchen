import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bk-footer" id="footer">
      <div className="bk-footer-inner">
        {/* Brand / About */}
        <div className="bk-footer-column bk-footer-brand">
          <Link to="/" className="bk-brand">
            <img src={assets.logo} alt="Bwari Kitchen logo" className="bk-logo" />
            <div className="bk-brand-text">
              <span className="bk-brand-title">Bwari Kitchen</span>
              <span className="bk-brand-subtitle">Fresh • Local • Fast</span>
            </div>
          </Link>
          <p className="bk-footer-description">
            Freshly made meals, swift delivery, and premium taste for every plate.
            Bwari Kitchen Eatery brings restaurant-quality dishes straight to your corner.
          </p>
          <div className="bk-footer-social">
            <a href="#" aria-label="Bwari Kitchen on Facebook">
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="#" aria-label="Bwari Kitchen on X">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="#" aria-label="Bwari Kitchen on LinkedIn">
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="bk-footer-column">
          <h3 className="bk-footer-title">Company</h3>
          <ul className="bk-footer-list">
            <li>
              <Link to="/" className="bk-footer-link">Home</Link>
            </li>
            <li>
              <button
                className="bk-footer-link ghost"
                onClick={() => {
                  const el = document.getElementById('explore-menu');
                  if (!el) return;
                  const offset = 72;
                  const y = el.getBoundingClientRect().top + window.scrollY - offset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
              >
                Menu
              </button>
            </li>
            <li>
              <button
                className="bk-footer-link ghost"
                onClick={() => {
                  const el = document.getElementById('app-download');
                  if (!el) return;
                  const offset = 72;
                  const y = el.getBoundingClientRect().top + window.scrollY - offset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
              >
                Mobile App
              </button>
            </li>
            <li>
              <Link to="/privacy" className="bk-footer-link">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bk-footer-column">
          <h3 className="bk-footer-title">Get in touch</h3>
          <ul className="bk-footer-list">
            <li className="bk-footer-text">Bwari, Abuja, Nigeria</li>
            <li className="bk-footer-text">+234-812-345-6789</li>
            <li className="bk-footer-text">contact@bwarikitchen.com</li>
          </ul>
          <Link to="/cart" className="bk-btn bk-btn-primary bk-footer-cta">
            Order Now
          </Link>
        </div>
      </div>

      <div className="bk-footer-bottom">
        <p>© {year} Bwari Kitchen. All rights reserved.</p>
        <p className="bk-footer-tagline">Eat good. Live sharp.</p>
      </div>
    </footer>
  );
};

export default Footer;
