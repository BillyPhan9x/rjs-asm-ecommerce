import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import product_1 from "../../assets/images/product_1.png";
import product_2 from "../../assets/images/product_2.png";
import product_3 from "../../assets/images/product_3.png";
import product_4 from "../../assets/images/product_4.png";
import product_5 from "../../assets/images/product_5.png";

const CategoriesList = () => {
  return (
    <section>
      <Container>
        <div className="category__title text-center">
          <p className="mb-1">Carefully created collections</p>
          <h2 className="mb-4">Browse our categories</h2>
        </div>
        <Row>
          <Col lg="6" md="6" className="mb-4 mb-md-0">
            <Link className="category__item" to="/shop">
              <img className="img-fluid" src={product_1} alt="product_1" />
            </Link>
          </Col>

          <Col lg="6" md="6" className="mb-4 mb-md-0">
            <Link className="category__item" to="/shop">
              <img className="img-fluid" src={product_2} alt="product_2" />
            </Link>
          </Col>

          <Col lg="4" md="4" className="mb-2 mt-4">
            <Link className="category__item" to="/shop">
              <img className="img-fluid" src={product_3} alt="product_1" />
            </Link>
          </Col>

          <Col lg="4" md="4" className="mb-2 mt-4">
            <Link className="category__item" to="/shop">
              <img className="img-fluid" src={product_4} alt="product_1" />
            </Link>
          </Col>

          <Col lg="4" md="4" className="mb-2 mt-4">
            <Link className="category__item" to="/shop">
              <img className="img-fluid" src={product_5} alt="product_1" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CategoriesList;
