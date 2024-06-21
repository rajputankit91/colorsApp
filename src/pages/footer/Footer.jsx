import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div className="footer-section">
      <div class="footer-section-top">
        <div class="footer-logo">
          <img
            src="https://pbs.twimg.com/profile_images/1710686397487894528/t7Jd5yJO_400x400.jpg"
            alt="img"
          />
        </div>
        <div class="footer-link">
          <div class="footer-link-box">
            <h6>Discovery Inc.</h6>
            <div class="link-item">
              <p>
                <a href="#">About Us</a>
              </p>
              <p>
                <a href="#">Contact Us</a>
              </p>
              <p>
                <a href="#">Privacy</a>
              </p>
            </div>
            <div class="footer-link-icon">
              <i class="fa fa-angle-down"></i>
            </div>
          </div>
          <div class="footer-link-box">
            <h6>Orders</h6>
            <div class="link-item">
              <p>
                <a href="#">Shipping</a>
              </p>
              <p>
                <a href="#">Returns/Exchanges</a>
              </p>
              <p>
                <a href="#">Terms of Service</a>
              </p>
            </div>
            <div class="footer-link-icon">
              <i class="fa fa-angle-down"></i>
            </div>
          </div>
          <div class="footer-link-box">
            <h6>Trademarks</h6>
            <p class="footer-box-para">
              Perfect Pantry®, Perfect Fridge®, Stay Fresh®, Organized Lunch®
              and Kitchen Discovery® are trademarks of Discovery Inc.
            </p>
            <div class="footer-link-icon">
              <i class="fa fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-section-bottom">
        <div class="footer-section-bottom-left">
          <p>
            © 2024 <a href="#">Color-Palette</a>{" "}
          </p>
        </div>
        <div class="footer-section-bottom-right">
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaWhatsapp />
          <CiLinkedin />
        </div>
      </div>
    </div>
  );
}

export default Footer;
