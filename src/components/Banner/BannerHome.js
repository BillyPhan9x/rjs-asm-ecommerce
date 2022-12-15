import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import banner from "../../assets/images/banner1.jpg";

const BannerHome = () => {
  return (
    <section
      className="hero pb-3 bg-center d-flex align-items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Container className="py-5">
        <Row className="px-4 px-lg-5">
          <Col lg="6">
            <p className="mb-2 text-uppercase">New Inspiration 2020</p>
            <h1 className="h1 mb-3 text-uppercase">20% off on new season</h1>
            <Link className="btn btn-dark px-4 py-2 rounded-0" to="/shop">
              Browse collections
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerHome;
