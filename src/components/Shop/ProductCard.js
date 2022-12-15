import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

import priceFormat from "../../utils/priceFormat";

const ProductCard = ({ item }) => {
  const price = priceFormat(item.price);

  return (
    <Col lg="4" md="4" sm="6" className="mb-2 mt-4">
      <Link to={`/detail/${item._id.$oid}`} state={item} className="link-dark">
        <div className="product__item">
          <div className="product__img">
            <img src={item.img1} alt={item.name || item.name} />
          </div>
          <div className="p-2 product__info text-center">
            <h3>{item.name}</h3>
            <p>{price} VND</p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default ProductCard;
