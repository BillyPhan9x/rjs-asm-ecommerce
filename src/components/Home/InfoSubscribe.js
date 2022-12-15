import React from "react";
import { Container, Row, Col, Input, InputGroup, Button } from "reactstrap";

const InfoSubscribe = () => {
  return (
    <section>
      <Container className="p-0">
        <Row className="d-flex align-items-center">
          <Col lg="6" className="mb-3 mb-lg-0 other__infomation">
            <h5 className="text-uppercase">Let's be friends!</h5>
            <p className="mb-0">Nisi nisi tempor consequat laboris nisi.</p>
          </Col>

          <Col lg="6">
            <InputGroup>
              <Input
                placeholder="Enter your email address"
                className="p-4 rounded-0"
              />
              <Button color="dark" className="px-5 rounded-0">
                Submit
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InfoSubscribe;
