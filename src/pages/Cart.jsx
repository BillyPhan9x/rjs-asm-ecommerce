import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import BannerCart from "../components/Banner/BannerCart";
import ListCart from "../components/Cart/ListCart";

import priceFormat from "../utils/priceFormat";

import "../styles/cart.css";

const Cart = () => {
  const totalAmountStore = useSelector((state) => state.cart.totalAmount);

  let totalAmount;
  if (localStorage.getItem("totalAmount") === null) {
    totalAmount = totalAmountStore;
  } else {
    totalAmount = localStorage.getItem("totalAmount");
  }
  // console.log("totalAmount", totalAmount);

  // const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // console.log("totalQuantity", totalQuantity);

  return (
    <Container>
      {/* banner cart */}
      <BannerCart />

      <section className="py-5">
        <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
        <Row>
          {/* cart table left */}
          <Col lg="8" className="mb-4 mb-lg-0">
            <ListCart />

            <div className="bg-light px-4 py-3 mt-5">
              <Row className="align-items-center text-center">
                <Col md="6" className="mb-3 mb-md-0 lg-text-start">
                  <Link to="/shop" className="btn p-0 text-dark ">
                    <i className="fas fa-long-arrow-alt-left me-2"></i>Continue
                    Shopping
                  </Link>
                </Col>

                <Col md="6" className="lg-text-end">
                  <Link
                    to="/checkout"
                    className="btn btn-outline-dark rounded-0"
                  >
                    Procceed to checkout
                    <i className="fas fa-long-arrow-alt-right ms-2"></i>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          {/* cart total right */}
          <Col lg="4">
            <div className="card border-0 rounded-0 p-lg-4 bg-light">
              <div className="card-body py-5">
                <h5 className="mb-4">Cart total</h5>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center justify-content-between">
                    <span className="small fw-semibold">Subtotal</span>
                    <span className="text-muted small">
                      {priceFormat(totalAmount.toString())} VND
                    </span>
                  </li>
                  <li className="border-bottom my-2"></li>
                  <li className="d-flex align-items-center justify-content-between mb-4">
                    <span className="small fw-semibold">Total</span>
                    <span className="total__price">
                      {priceFormat(totalAmount.toString())} VND
                    </span>
                  </li>
                  <li>
                    <form>
                      <div className="form-group mb-0">
                        <input
                          className="form-control rounded-0"
                          type="text"
                          placeholder="Enter your coupon"
                        />
                        <button
                          className="btn btn-dark w-100 rounded-0 py-2"
                          type="submit"
                        >
                          <i className="fas fa-gift me-2"></i>Apply coupon
                        </button>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Cart;
