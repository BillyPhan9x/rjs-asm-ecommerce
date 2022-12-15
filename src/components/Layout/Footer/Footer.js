import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white">
      <Container className="py-4">
        <Row className="py-5">
          <Col lg="4" md="4" className="mb-3 mb-md-0">
            <h6 className="text-uppercase mb-3">Customer services</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <Link className="footer-link" to="#">
                  Help &amp; Contact Us
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Returns &amp; Refunds
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Online Stores
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg="4" md="4" className="mb-3 mb-md-0">
            <h6 className="text-uppercase mb-3">Company</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <Link className="footer-link" to="#">
                  What We Do
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Available Services
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Latest Posts
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  FAQs
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg="4" md="4">
            <h6 className="text-uppercase mb-3">Social media</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <Link className="footer-link" to="#">
                  Twitter
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Tumblr
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Pinterest
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <div
          className="border-top pt-4"
          style={{ borderColor: "#1d1d1d !important" }}
        >
          <Row>
            <Col lg="6" md="4">
              <p className="small text-muted mb-0">
                &copy; {year} All rights reserved.
              </p>
            </Col>

            <Col lg="6" md="4" className="text-lg-right">
              <p className="small text-muted mb-0">
                Template designed by
                <Link className="text-white reset-anchor" to="#">
                  - Phan Thông
                </Link>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
