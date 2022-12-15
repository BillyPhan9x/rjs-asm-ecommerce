import React from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

const BannerShop = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="px-4 px-lg-5 py-lg-4 align-items-center">
          <Col lg="6" md="6">
            <h1 className="h2 text-uppercase mb-0">Shop</h1>
          </Col>

          <Col lg="6" className="shop__banner">
            <Breadcrumb className="mb-0 px-0">
              <BreadcrumbItem active>Shop</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerShop;
