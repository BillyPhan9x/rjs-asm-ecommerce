import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

const BannerCheckout = () => {
  return (
    <section className="py-5 bg-light checkout__banner">
      <Container>
        <Row className="px-4 px-lg-5 py-lg-4 align-items-center">
          <Col lg="6" md="6">
            <h1 className="h2 text-uppercase mb-0">Checkout</h1>
          </Col>

          <Col lg="6" className="shop__banner">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="#" className="link-dark h5">
                  Home
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="#" className="link-dark h5">
                  Cart
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Checkout</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerCheckout;
