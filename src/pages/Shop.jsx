import React from "react";
import { Container, Row, Col } from "reactstrap";

import BannerShop from "../components/Banner/BannerShop";
import Menu from "../components/Shop/Menu";
import Search from "../components/Shop/Search";
import Sort from "../components/Shop/Sort";
import ProductList from "../components/Shop/ProductList";

import "../styles/shop.css";

const Shop = () => {
  return (
    <Container>
      {/* banner shop */}
      <BannerShop />

      <section>
        <Container>
          <Row>
            {/* categories menu */}
            <Menu />

            {/* products render, search, sort */}
            <Col lg="9" md="9" className="m-0 p-0">
              <Row className="mb-3 align-items-center">
                {/* search */}
                <Search />
                {/* sorting */}
                <Sort />
              </Row>
              <Row>
                <ProductList />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default Shop;
