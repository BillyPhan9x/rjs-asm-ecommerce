import React from "react";

import priceFormat from "../../utils/priceFormat";

const ListCartTr = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <tr className="cart__content">
      <td className="ps-0">
        <div className="media">
          <img src={item.img1} alt={item.name} />
        </div>
      </td>
      <td className="fw-semibold">
        <div className="media">{item.name}</div>
      </td>
      <td>
        <p>{priceFormat(item.price)} VND</p>
      </td>
      <td>
        <div className="quantity">
          <button
            className="p-0"
            onClick={() => {
              onDecrease(item.id);
            }}
          >
            <i className="fas fa-caret-left"></i>
          </button>
          <span className="mx-3">{item.quantity}</span>
          <button
            className="p-0"
            onClick={() => {
              onIncrease(item.id);
            }}
          >
            <i className="fas fa-caret-right"></i>
          </button>
        </div>
      </td>

      <td>
        <p className="mb-0">{priceFormat(item.totalPrice.toString())} VND</p>
      </td>
      <td>
        <button>
          <i
            className="fas fa-trash-alt small text-muted"
            onClick={() => {
              onRemove(item.id);
            }}
          ></i>
        </button>
      </td>
    </tr>
  );
};

export default ListCartTr;
