import { createSlice } from "@reduxjs/toolkit";

const cartListItem = JSON.parse(localStorage.getItem("listCart")) || [];

const initialcartState = {
  listCart: cartListItem,
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialcartState,
  reducers: {
    // Thêm sản phẩm vào giỏ hàng.
    ADD_CART(state, action) {
      const newItem = action.payload;
      // console.log("newItem", newItem);
      // console.log(state.listCart);
      const existingItem = state.listCart.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        // Kiểm tra nếu ko có sản phẩm trong giỏ hàng thì thêm sản phẩm vào
        state.listCart.push({
          id: newItem.id,
          name: newItem.name,
          img1: newItem.img1,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
        // state.listCart.push(newItem);
        // state.listCart.push(action.payload);
      } else {
        //Nếu sản phẩm đã có trong giỏ hàng thì chỉ update lại số lượng và tổng giá chứ ko cần thêm mới.
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalQuantity = state.totalQuantity + action.payload.quantity;

      // update tính tổng giá trị đơn hàng
      state.totalAmount = state.listCart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      localStorage.setItem("listCart", JSON.stringify(state.listCart)); // lưu lại vào localStorage
      // console.log("dữ liệu list cart add:", state.listCart);
      localStorage.setItem("totalAmount", state.totalAmount);
    },

    // Cập nhật dữ liệu cho sản phẩm.
    UPDATE_CART(state, action) {
      const existingItem = state.listCart.find(
        (item) => item.id === action.payload.id
      );

      if (action.payload.type === "increment") {
        // console.log("click increment", existingItem);

        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(existingItem.price);
        state.totalQuantity++;
      }

      if (action.payload.type === "decrement") {
        // console.log("click decrement", existingItem);

        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          existingItem.totalPrice =
            Number(existingItem.totalPrice) - Number(existingItem.price);
          state.totalQuantity--;
        } else {
          return;
        }
      }

      // update tính tổng giá trị đơn hàng
      state.totalAmount = state.listCart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      localStorage.setItem("listCart", JSON.stringify(state.listCart)); // lưu lại vào localStorage
      // console.log("đây là dữ liệu của cart:", state.listItem);

      localStorage.setItem("totalAmount", state.totalAmount);
    },

    // Xóa một sản phẩm trong giỏ hàng.
    DELETE_CART(state, action) {
      const id = action.payload; // console.log("id", id);
      const existingItem = state.listCart.find((item) => item.id === id);

      if (existingItem) {
        state.listCart = state.listCart.filter((item) => item.id !== id);

        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      // update tính tổng giá trị đơn hàng
      state.totalAmount = state.listCart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      localStorage.setItem("listCart", JSON.stringify(state.listCart)); // lưu lại vào localStorage
      // console.log("dữ liệu list cart del:", state.listCart);
      // state.totalAmount = state.listCart.reduce(
      //   (total, item) => total + Number(item.price) * Number(item.quantity),
      //   0
      // );
      localStorage.setItem("totalAmount", state.totalAmount);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

/*
reducers: {
      ADD_CART(state, action) {
        const updateItemQuantity = () => {
          //Nếu sản phẩm đã có trong giỏ hàng thì chỉ update lại số lượng chứ ko cần thêm mới.
          for (let i = 0; i < state.listItem.length; i++) {
            if (state.listItem[i].id === action.payload.id) {
              state.listItem[i].quantity += action.payload.quantity;
              setItemToLocalStorage("listItemInCart", state.listItem); // lưu lại vào localStorage
              return true;
            }
          }
          return false;
        };
        if (!updateItemQuantity()) {
          // Kiểm tra nếu ko có sản phẩm trong giỏ hàng thì thêm mới
          // console.log("payload", action.payload);
          state.listItem.push(action.payload);
          setItemToLocalStorage("listItemInCart", state.listItem);
          // console.log(state.listItem);
        }
        // console.log("đây là dữ liệu của cart:", state.listItem);
      },
      UPDATE_CART(state, action) {
        // console.log("Action: ", action);

        if (action.payload.type === "increase") {
          for (let i = 0; i < state.listItem.length; i++) {
            if (state.listItem[i].id === action.payload.id) {
              state.listItem[i].quantity++;
            }
          }
        }
        if (action.payload.type === "decrease") {
          for (let i = 0; i < state.listItem.length; i++) {
            if (state.listItem[i].id === action.payload.id) {
              state.listItem[i].quantity--;
            }
          }
        }
        // console.log("đây là dữ liệu của cart:", state.listItem);
      },
      DELETE_CART(state, action) {
        const deleteItemInArrByIdValue = (arr, idValue) => {
          //Hàm này dùng tạo mảng mới loại bỏ phần tử có giá trị ID truyền vào (hàm mới = hàm cũ - 1 phần tử có giá trị ID muốn loại bỏ)
          const newArr = arr.filter((item) => item.id !== idValue);
          return newArr;
        };
        // console.log(action);
        state.listItem = deleteItemInArrByIdValue(
          state.listItem,
          action.payload
        );
        setItemToLocalStorage("listItemInCart", state.listItem);
      },
    },
*/
