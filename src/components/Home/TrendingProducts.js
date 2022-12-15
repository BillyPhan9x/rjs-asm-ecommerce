import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { popupActions } from "../../Redux/slices/popup-slice";

import priceFormat from "../../utils/priceFormat";

const TrendingProducts = () => {
  const [data, setData] = useState([]);

  const fecthData = async () => {
    const url =
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

    const response = await fetch(url);

    const data = await response.json();

    setData(data); // truyền dữ liệu lấy được vào data
  };
  useEffect(() => {
    fecthData(); // Gọi hàm để lấy dữ liệu
  }, []);

  // Chỉ hiển thị tối đa 8 phần tử đầu tiên của danh sách trả về từ API.
  const products = data.slice(0.8);
  // console.log("sản phẩm", products);

  const dispatch = useDispatch();

  const displayPopup = (value) => {
    // console.log("san pham", value);
    dispatch(popupActions.SHOW_POPUP(value));
  };
  return (
    <section className="trending">
      <div className="trending__title">
        <p className="mb-1">Made the hard way</p>
        <h2 className="mb-4">Top trending products</h2>
      </div>
      <Row>
        {products?.map((product) => (
          <Col lg="3" md="4" sm="6" key={product._id.$oid}>
            <div className="trending__product text-center my-3">
              <img
                src={product.img1}
                alt={product.name}
                className="img-fluid w-100"
                onClick={() => displayPopup(product)}
              />
              <h6 className="mt-3">{product.name}</h6>
              <p className="small">{priceFormat(product.price)}</p>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default TrendingProducts;
