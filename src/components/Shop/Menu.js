import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { categoryActions } from "../../Redux/slices/category-slice";

const Menu = () => {
  const dispatch = useDispatch();

  const getCategoryValue = (value) => {
    // console.log(value);
    dispatch(categoryActions.FILTER_CATEGORY(value.toLowerCase()));
  };

  return (
    <Col lg="3" md="3" className="text-start m-0 p-0 pe-4">
      <div className="shop__catergories">
        <h3>CATEGORIES</h3>
        <nav className="flex-column nav__wrapper">
          <h4 className="text-bg-dark p-2 ps-3 mb-3">APPLE</h4>
          <Link
            className="link-warning ms-4"
            to="#"
            onClick={(data) => getCategoryValue(data.target.textContent)}
          >
            All
          </Link>
          <nav className="nav nav-pills flex-column">
            <h5 className="text-bg-light text-secondary p-2 ps-4 my-2">
              IPHONE & MAC
            </h5>
            <nav className="nav nav-pills flex-column ms-4 my-1 ">
              <Link
                className="link-warning py-1"
                to="#"
                onClick={(data) => getCategoryValue(data.target.textContent)}
              >
                iPhone
              </Link>
              <Link
                className="link-warning py-1"
                to="#"
                onClick={(data) => getCategoryValue(data.target.textContent)}
              >
                iPad
              </Link>
              <Link
                className="link-warning py-1"
                to="#"
                onClick={(data) => getCategoryValue(data.target.textContent)}
              >
                Macbook
              </Link>
            </nav>
          </nav>
          <nav className="nav nav-pills flex-column">
            <h5 className="text-bg-light text-secondary p-2 ps-4 my-2">
              WIRELESS
            </h5>
            <nav className="nav nav-pills flex-column ms-4 my-1 ">
              <Link
                className="link-warning py-1"
                to="#"
                onClick={(data) => getCategoryValue(data.target.textContent)}
              >
                Airpod
              </Link>
              <Link
                className="link-warning py-1"
                to="#"
                onClick={(data) => getCategoryValue(data.target.textContent)}
              >
                Watch
              </Link>
            </nav>
          </nav>
          <nav className="nav nav-pills flex-column">
            <h5 className="text-bg-light text-secondary p-2 ps-4 my-2">
              OTHER
            </h5>
            <nav className="nav nav-pills flex-column ms-4 my-1 ">
              <Link
                className="link-warning py-1"
                to="#"
                onClick={(data) => getCategoryValue(data.target.textContent)}
              >
                Mouse
              </Link>
              <Link
                className="link-warning py-1"
                to="#"
                onClick={(data) => getCategoryValue(data.target.textContent)}
              >
                Keyboard
              </Link>
              <Link
                className="link-warning py-1"
                to="#"
                onClick={(data) => getCategoryValue(data.target.textContent)}
              >
                Other
              </Link>
            </nav>
          </nav>
        </nav>
      </div>
    </Col>
  );
};

export default Menu;
