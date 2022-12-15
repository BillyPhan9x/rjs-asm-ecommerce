import React from "react";
import { Col } from "reactstrap";

const Search = () => {
  return (
    <Col lg="4" md="6" sm="6">
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Enter Search Here!"
      />
    </Col>
  );
};

export default Search;
