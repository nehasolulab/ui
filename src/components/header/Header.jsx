import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { navDropdownItem, navLink } from "./NavLink";
import "./header.css";

const Header = () => {
  const [navOpen, setNavOpen] = useState(true);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
    document.body.classList.toggle("menu-open", navOpen);
  };
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Container className="position-relative">
          <div className="d-flex align-items-lg-center align-items-start justify-content-between w-100">
            <div className="">
              {/* logo */}

              <Navbar.Brand href="#">
                <img
                  src=" https://www.mozaicq.com/images/mozaicq-brand-logo.png"
                  className="nav_logo"
                  alt="logo"
                />
              </Navbar.Brand>
            </div>

            <div>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <NavDropdown title="Categories" id="basic-nav-dropdown">
                    {navDropdownItem.map((item) => (
                      <NavDropdown.Item href={item.to}>
                        {item.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  {/* general links */}
                  {navLink.map((link) => (
                    <Nav.Link href={link.to}> {link.name}</Nav.Link>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </div>
            <div className="d-sm-flex align-items-center justify-content-between d-none">
              {/* search */}
              <div className="position-relative search_div me-5">
                <input type="search" placeholder="Search Products" />
                <i className="fa fa-search" />
              </div>
              {/* account & cart */}
              <div className="d-flex align-items-center me-3">
                <i className="fa fa-user me-1" />
                <Nav.Link href="#">Account</Nav.Link>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa fa-cart-shopping me-1" />
                <Nav.Link href="#">Cart</Nav.Link>
              </div>
            </div>
            {/* toggle icon */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleNavToggle}
            />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
