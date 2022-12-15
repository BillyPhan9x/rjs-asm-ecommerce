import React from "react";
import { Col } from "reactstrap";

const Sort = () => {
  return (
    <Col lg="8" md="6" sm="6" className="sort">
      <select className="selectpicker my-0">
        <option value="default">Default sorting</option>
        <option value="DownToUp">Price: Low to High</option>
        <option value="UpToDown">Price: High to Low</option>
      </select>
    </Col>
  );
};

export default Sort;
