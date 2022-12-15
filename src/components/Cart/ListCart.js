import React from "react";
import { Table } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Redux/slices/cart-slice";

import ListCartTr from "./ListCartTr";

import "../../styles/cart.css";

const ListCart = () => {
  const listCart = useSelector((state) => state.cart.listCart) || [];
  // console.log("listCart", listCart);

  const dispatch = useDispatch();

  const decreaseItemInCart = (id) => {
    //hàm giảm số lượng item trong cart dựa vào id
    // gửi 1 actions từ slice Cart vs type và mang theo dữ liệu
    dispatch(cartActions.UPDATE_CART({ type: "decrement", id: id }));
  };
  const increaseItemInCart = (id) => {
    // hàm tăng số lượng item trong cart dựa vào id
    // gửi 1 actions từ slice Cart vs type và mang theo dữ liệu
    dispatch(cartActions.UPDATE_CART({ type: "increment", id: id }));
  };

  const removeItemInCart = (id) => {
    // console.log("Lấy được:", id);
    if (
      window.confirm(
        "Are you sure to remove this product from your shopping cart?"
      ) // hỏi lại nếu user đồng y xóa sản phẩm thì tiến hành xóa
    ) {
      dispatch(cartActions.DELETE_CART(id));
    }
  };

  return (
    <Table borderless hover responsive>
      <thead className="list__cart bg-light">
        <tr>
          <th scope="col">IMAGE</th>
          <th scope="col">PRODUCT</th>
          <th scope="col">PRICE</th>
          <th scope="col">QUANTITY</th>
          <th scope="col">TOTAL</th>
          <th scope="col" className="pe-3">
            REMOVE
          </th>
        </tr>
      </thead>
      <tbody>
        {listCart &&
          listCart.map((item) => (
            <ListCartTr
              item={item}
              key={item.id}
              onIncrease={increaseItemInCart}
              onDecrease={decreaseItemInCart}
              onRemove={removeItemInCart}
            />
          ))}
      </tbody>
    </Table>
  );
};

export default ListCart;
