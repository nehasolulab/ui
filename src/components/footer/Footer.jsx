import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const department = [
    "Fashion",
    "Education Product",
    "Frozen Food",
    "Beverges",
    "Organic Grocery",
    "Office Supplies",
    "Beauty Products",
    "Books",
  ];
  const about = [
    "About Shopcarts",
    "Carrers",
    "News & Blog",
    "Help",
    "Press Center",
    "Shop by Location",
    "Shopcart Brands",
    "Ideas & Guides",
  ];
  const help = [
    "ShopCart Help",
    "Return",
    "Track Orders",
    "Contact Us",
    "Feedback",
    "Security & Fraud",
  ];
  return (
    <Container>
      <div className="row footer-container">
        <div className="col-lg-3 w-30 col-md-12 mb-lg-0 mb-5 footer-col">
          <img
            src="https://www.mozaicq.com/images/mozaicq-brand-logo.png"
            className="footer-logo"
            alt="logo"
          />
          <p className="footer-text pe-lg-5 pe-0 text-justify">
            Explore. Engage. Shop
          </p>
          <div className="footer-icon-container d-flex align-items-center">
            <p className="footer-icon">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </p>
            <p className="footer-icon">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </p>
            <p className="footer-icon">
              <a
                href="https://linkdin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-3 ps-lg-4 w-20 col-6 footer-col">
          <p className="footer-title">Department</p>
          {department.map((item) => (
            <Link to="/" className="footer-general-text">
              {item}
            </Link>
          ))}
        </div>
        <div className="col-lg-3 w-20 ps-3 col-6 footer-col">
          <p className="footer-title">About Us</p>
          {about.map((item) => (
            <Link to="/" className="footer-general-text">
              {item}
            </Link>
          ))}
        </div>
        <div className="col-lg-3 w-30 col-md-12 mt-lg-0 mt-5 footer-col">
          <p className="footer-title">Help</p>
          {help.map((item) => (
            <Link to="/" className="footer-general-text">
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <hr className="footer-hr" />
        <p className="copyright-text text-center py-3 mb-0">
          Copyright © 2023 Stargazer Technologies Private Limited - All Rights
          Reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
