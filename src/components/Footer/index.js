import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Button } from "../Button";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Sign up to our beta form</p>
        <p className="footer-subscription-text">
          Sign up to our mailing list to find out more information and keep up
          to date about our activities
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              © 2020 Whichride - All rights reserved.
            </Link>
          </div>
          <div className="social-icons">
            <Link
              className="social-logo"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <div className="footer-logo">Privacy Policy</div>
            </Link>
            <Link
              className="social-logo"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <div className="footer-logo">Terms and Conditions</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
