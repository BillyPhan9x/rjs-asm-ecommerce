import React from "react";
import { useSelector } from "react-redux";

import {
  Container,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  Form,
  Button,
} from "reactstrap";

import BannerCheckout from "../components/Banner/BannerCheckout";

import priceFormat from "../utils/priceFormat";

import "../styles/checkout.css";

const Checkout = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
  // console.log("currentUser", currentUser);

  const totalAmount = localStorage.getItem("totalAmount");
  console.log("totalAmount", totalAmount);

  const listCart = useSelector((state) => state.cart.listCart);
  console.log("listCart", listCart);

  return (
    <Container>
      {/* banner checkout */}
      <BannerCheckout />
      {/*  */}
      <section className="checkout__form">
        <Container>
          <Row>
            <h2 className="mb-4">Billing details</h2>
            <Col lg="8" md="6" sm="12">
              <Form>
                <FormGroup>
                  <Label for="exampleName">Full Name:</Label>
                  <Input
                    bsSize="lg"
                    id="exampleName"
                    name="name"
                    placeholder="Enter Your Full Name Here!"
                    type="text"
                    defaultValue={currentUser.name}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email:</Label>
                  <Input
                    bsSize="lg"
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Your Email Here!"
                    type="email"
                    defaultValue={currentUser.email}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleNumber">Phone Number:</Label>
                  <Input
                    bsSize="lg"
                    id="exampleNumber"
                    name="phone"
                    placeholder="Enter Your Phone Number Here!"
                    type="tel"
                    defaultValue={currentUser.phone}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleAddress">Address:</Label>
                  <Input
                    bsSize="lg"
                    id="exampleAddress"
                    name="address"
                    placeholder="Enter Your Address Here!"
                    type="text"
                  />
                </FormGroup>

                <Button className="btn-dark mt-3">Place Order</Button>
              </Form>
            </Col>

            <Col lg="4" md="6" sm="12">
              <div className="card p-lg-4 bg-light">
                <div className="card-body">
                  <h4 className="text-uppercase mb-2">Your order</h4>
                  <ul className="list-unstyled mb-0">
                    {listCart.map((item) => (
                      <li key={item.id}>
                        <h6>{item.name}</h6>
                        <p>
                          {priceFormat(item.price)} VND
                          <small className="mx-1">x</small>
                          {item.quantity}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4 total">
                    <h6>Total</h6>
                    <p>{priceFormat(totalAmount)} VND</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default Checkout;
