import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { toast } from "react-toastify";

import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../Redux/slices/cart-slice";

import useHttp from "../hooks/use-http";
import priceFormat from "../utils/priceFormat";

import "../styles/detail.css";

const DetailProduct = () => {
  const location = useLocation();
  // console.log("location", location);
  const product = location.state;
  // console.log("product ", product);
  const { data } = useHttp();
  // console.log("data", data);
  const dispatch = useDispatch();

  // ẩn , hiện description product
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [currentImg, setCurrentImg] = useState(product.img1);
  // console.log("currentImg", currentImg);

  useEffect(() => {
    setCurrentImg(product.img1);
  }, [product.img1]);

  // hàm split để tách chuỗi thành những chuỗi nhỏ hơn dựa trên giá trị điều kiện truyền vào.
  let productDesc;
  if (product.long_desc.includes("\n\n•")) {
    productDesc = product.long_desc.split("• ");
  } else if (product.long_desc.includes("\n•")) {
    productDesc = product.long_desc.split("•");
  } else if (product.long_desc.includes("\n-")) {
    productDesc = product.long_desc.split("- ");
  }
  // console.log("productDesc", productDesc);

  // lọc danh sách để lấy được những sản phẩm cùng category nhưng khác name ( 0 trùng với sản phẩm đang xem)
  const relatedProducts = data.filter(
    (item) => item.category === product.category && item.name !== product.name
  );
  // console.log("relatedProducts", relatedProducts);

  // số lượng sản phẩm , tăng or giảm cập nhật UI
  const [quantity, setQuantity] = useState(1);
  const upQuantity = () => {
    setQuantity(quantity + 1);
  };
  const downQuantity = () => {
    setQuantity(quantity - 1);
  };

  // hàm xử lý thêm sản phẩm vào giỏ hảng
  const addToCartHandler = () => {
    // console.log("sản phẩm và số lượng:", product, quantity);
    const newItemCart = {
      id: product._id.$oid,
      img1: product.img1,
      name: product.name,
      price: product.price,
      img: product.img1,
      quantity: quantity,
    };
    // console.log("id san pham:", newCartItem.id);
    dispatch(cartActions.ADD_CART(newItemCart));
    toast.success("Product added successfully.");
  };

  return (
    <section>
      <Container>
        <Row className="mb-5">
          {/* detail left */}
          <Col lg="6">
            <Row>
              <Col lg="2 p-0 m-0" md="2" className="detail__images">
                <img
                  className="pb-2"
                  src={product.img1}
                  alt={product.name}
                  onClick={(data) => setCurrentImg(data.target.currentSrc)}
                />

                <img
                  className="pb-2"
                  src={product.img2}
                  alt={product.name}
                  onClick={(data) => setCurrentImg(data.target.currentSrc)}
                />

                <img
                  className="pb-2"
                  src={product.img3}
                  alt={product.name}
                  onClick={(data) => setCurrentImg(data.target.currentSrc)}
                />

                <img
                  className="pb-2"
                  src={product.img4}
                  alt={product.name}
                  onClick={(data) => setCurrentImg(data.target.currentSrc)}
                />
              </Col>

              <Col lg="10" md="10">
                <div className="my-4 my-md-0 detail__images">
                  <img
                    className="d-block w-100 big"
                    src={currentImg}
                    alt={product.name}
                  />
                </div>
              </Col>
            </Row>
          </Col>

          {/* detail right */}
          <Col lg="6" className="detail__info">
            <h1 className="mb-3">{product.name}</h1>
            <p className="lead">{priceFormat(product.price)} VND</p>
            <p className="detail__info-desc">{product.short_desc}</p>

            <h5 className="py-2 mb-3 text-uppercase">
              Category:
              <span className="ms-2 text-lowercase text-muted">
                {product.category}s
              </span>
            </h5>
            <div className="d-flex algin-items-center ">
              <div className="detail__quantity">
                <h6 className="no-select">Quantity</h6>
                <button
                  className="ms-3"
                  disabled={quantity === 1}
                  onClick={downQuantity}
                >
                  <i className="fas fa-caret-left"></i>
                </button>
                <span className="fst-normal mx-3">{quantity}</span>
                <button className="me-3" onClick={upQuantity}>
                  <i className="fas fa-caret-right"></i>
                </button>
              </div>
              <Button
                className="btn btn-dark text-white rounded-0 py-1 px-4"
                onClick={addToCartHandler}
              >
                Add to cart
              </Button>
            </div>
          </Col>
        </Row>

        {/* DESCRIPTION */}
        <Row>
          <Col lg="12" className="description">
            <Button
              color="dark"
              tag="button"
              className="rounded-0 mb-3"
              onClick={toggle}
            >
              Description
            </Button>
            <Collapse isOpen={isOpen} {...product}>
              <Card className="border-0">
                <CardBody>
                  <h4 className="text-uppercase mb-4 fw-semibold">
                    Product description
                  </h4>
                  <p>{productDesc[0]} </p>
                  {productDesc.map(
                    (desc, index) =>
                      desc !== productDesc[0] && (
                        <p key={index} className="description__desc">
                          - {desc}
                        </p>
                      )
                  )}
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>

        {/* Related products  */}
        <section>
          <Container>
            <h2 className="fs-3 text-uppercase mb-4">Related products</h2>
            <Row>
              {relatedProducts &&
                relatedProducts.map((item) => (
                  <RelatedProducts item={item} key={item._id.$oid} />
                ))}

              {relatedProducts.length === 0 && <p>No related products.</p>}
            </Row>
          </Container>
        </section>
      </Container>
    </section>
  );
};

// component RelatedProducts
const RelatedProducts = ({ item }) => {
  return (
    <div className="col-lg-3 col-4 text-center">
      <Link
        to={`/detail/${item._id.$oid}`}
        state={item}
        className="link-dark related"
      >
        <img
          src={item.img1}
          alt={item.name}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
        <h6 className="mt-3 lh-base">{item.name}</h6>
        <p>{priceFormat(item.price)} VND</p>
      </Link>
    </div>
  );
};

export default DetailProduct;

/*
<p className="text-muted text-small mb-0">ĐẶC ĐIỂM NỔI BẬT</p>
                  {productDesc.map(
                    (item, index) =>
                      item !== `ĐẶC ĐIỂM NỔI BẬT\n` && <p key={index}>{item}</p>
                  )}
*/
