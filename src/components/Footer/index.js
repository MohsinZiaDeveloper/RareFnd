import React from "react";
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import RareFnd from "../../assets/logos/rarefnd_logo.png";
import AuthContext from "../../Context/AuthContext";
import { useContext } from "react";
import "./index.css";

export default function Footer() {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="FooterComponent">
      <CDBFooter className="shadow bg-white">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-3 p-0"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <Row
              style={{
                width: "100%",
                justifyContent: "Space-between",
                paddinTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <Col lg={3} md={12}>
                <CDBBox>
                  <Link to="/" className="align-items-center text-dark">
                    <img alt="logo" src={RareFnd} width="90px" />
                  </Link>
                  <p className="my-3 text-secondary" style={{ width: "250px" }}>
                    <span className="fw-bold">ADDRESS: </span>
                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/zaKNmoRAopMUHWDi9"
                      className="my-3 text-secondary"
                      style={{ width: "250px" }}
                    >
                      DMCC Crypto Centre, 48th Floor, Almas Tower, JLT, UAE PO
                      BOX 48800.
                    </a>
                  </p>
                </CDBBox>
              </Col>
              <Col lg={3} md={12} className="FooterCol">
                <CDBBox className="mt-1">
                  <p className="h5" style={{ fontWeight: "600" }}>
                    RareFnd
                  </p>
                  <CDBBox
                    flex="column"
                    display="flex"
                    style={{ cursor: "pointer", padding: "0" }}
                  >
                    <Link
                      className="text-decoration-none text-secondary"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="text-decoration-none text-secondary"
                      to="/about"
                    >
                      About Us
                    </Link>
                    <Link
                      className="text-decoration-none text-secondary"
                      to="/about#contacts"
                    >
                      Contacts
                    </Link>
                  </CDBBox>
                </CDBBox>
              </Col>
              <Col lg={3} md={12} className="FooterCol">
                <CDBBox className="mt-1">
                  <p className="h5" style={{ fontWeight: "600" }}>
                    Help & Support
                  </p>
                  <CDBBox
                    display="flex"
                    flex="column"
                    style={{ cursor: "pointer", padding: "0" }}
                  >
                    <Link
                      className="text-decoration-none text-secondary"
                      to="/about#contacts"
                    >
                      Support
                    </Link>
                    <Link
                      className="text-decoration-none text-secondary"
                      to="/signup"
                    >
                      Sign Up
                    </Link>
                    {user ? (
                      <Link
                        className="text-decoration-none text-secondary"
                        to="/logout"
                        onMouseDown={logOut}
                      >
                        Log Out
                      </Link>
                    ) : (
                      <Link
                        className="text-decoration-none text-secondary"
                        to="/login"
                      >
                        Log In
                      </Link>
                    )}
                  </CDBBox>
                </CDBBox>
              </Col>
              <Col lg={3} md={12} className="FooterCol">
                <CDBBox className="mt-1">
                  <p className="h5" style={{ fontWeight: "600" }}>
                    Our services
                  </p>
                  <CDBBox
                    display="flex"
                    flex="column"
                    style={{ cursor: "pointer", padding: "0" }}
                  >
                    <Link
                      className="text-decoration-none text-secondary"
                      to="/programs#1"
                    >
                      Startaps Fundraising
                    </Link>
                    <Link
                      className="text-decoration-none text-secondary"
                      to="/programs#0"
                    >
                      Charities Fundraising
                    </Link>
                  </CDBBox>
                </CDBBox>
              </Col>
            </Row>
          </CDBBox>
          <CDBBox
            display="flex"
            justifyContent="center"
            style={{ width: "100%" }}
            className="mx-auto mt-3"
          >
            <a
              href="https://www.facebook.com/therat.finance/"
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <CDBBtn flat color="warning" className=" border-0 p-2 ">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
            </a>
            <a
              href="https://twitter.com/rare_fnd"
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <CDBBtn flat color="warning" className=" border-0 mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
            </a>
            <a
              href="https://www.instagram.com/rarefnd/"
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <CDBBtn flat color="warning" className=" border-0 p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </a>
            <a
              href="https://t.me/RareFnd"
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <CDBBtn flat color="warning" className=" mx-3 border-0 p-2">
                <CDBIcon fab icon="telegram" />
              </CDBBtn>
            </a>
            <a
              href="https://www.linkedin.com/company/the-rare-antiquities-token/"
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <CDBBtn flat color="warning" className="border-0 p-2">
                <CDBIcon fab icon="linkedin-in" />
              </CDBBtn>
            </a>
          </CDBBox>
          <small className="text-center mt-2">
            &copy; RareFnd, 2022. All rights reserved.
          </small>
        </CDBBox>
      </CDBFooter>
    </div>
  );
}
