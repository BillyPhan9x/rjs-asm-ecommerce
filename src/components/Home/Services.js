import React from "react";
import { Container, Row, Col } from "reactstrap";

const Services = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row className="text-center">
          {otherInfomation &&
            otherInfomation.map((item, index) => (
              <Col
                lg="4"
                className="mb-3 mb-lg-3 other__infomation"
                key={index}
              >
                <h6 className="text-uppercase mb-1">{item.title}</h6>
                <p className="mb-0">{item.subtitle}</p>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

const otherInfomation = [
  {
    title: "Free shipping",
    subtitle: "Free shipping worlwide",
  },
  {
    title: "24 x 7 service",
    subtitle: "Free shipping worlwide",
  },
  {
    title: "Festival offer",
    subtitle: "Free shipping worlwide",
  },
];

export default Services;
