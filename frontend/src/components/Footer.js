import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../Ietlogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-Links">

          <div className="sb_footer-Links_div">
            <div className="iet">
            <img src={logo} alt="I.E.T Lucknow Logo" />
              <h1>I.E.T Lucknow</h1>
            </div>
            <h3>
              This is the Authenticated website of the I.E.T for College
              Students Only...
            </h3>
            <h4>Social Media Links</h4>
            <div className="socialmedia">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://api.whatsapp.com/send?phone=YOURNUMBER"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </Link>
              <Link
                to="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </Link>
              <Link
                to="https://in.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </Link>
            </div>
          </div>

          <div className="sb_footer-Links_div">
            <h4>For Business</h4>
            <Link to="/employeer">
              <p>Employeer</p>
            </Link>
            <Link to="/healthplan">
              <p>Health Plan</p>
            </Link>
            <Link to="/individual">
              <p>Individual</p>
            </Link>
          </div>

          <div className="sb_footer-Links_div">
            <h4>Resources</h4>
            <Link to="/resources">
              <p>Resource Center</p>
            </Link>
            <Link to="/testimonials">
              <p>Testimonials</p>
            </Link>
            <Link to="/STV">
              <p>STV</p>
            </Link>
          </div>

          <div className="sb_footer-Links_div">
            <h4>Pages</h4>
            <Link to="/academics">
              <p>Academics</p>
            </Link>
            <Link to="/ietstore">
              <p>IET Store</p>
            </Link>
            <Link to="https://alumni-speak.iethub.org/">
              <p>Alumni</p>
            </Link>
            <Link to="https://iethub.org/clubs">
              <p>Clubs</p>
            </Link>
            <Link to="/events">
              <p>Events</p>
            </Link>
          </div>
          <div className="sb_footer-Links_div">
            <h4>Quick Links</h4>
            <Link to="/FAQ">
              <p>FAQ</p>
            </Link>
            <Link to="/support">
              <p> Support</p>
            </Link>
            <Link to="/privacypolicy">
              <p>Privacy Policy</p>
            </Link>
          </div>
        </div>
        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All rights reserved.</p>
          </div>
          <div className="sb_footer-below-Links">
            <Link to="/terms">
              <p>Terms & Conditions</p>
            </Link>
            <Link to="/privacy">
              <p>Privacy</p>
            </Link>
            <Link to="/security">
              <p>Security</p>
            </Link>
            <Link to="/cookie">
              <p>Cookies declaration</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
