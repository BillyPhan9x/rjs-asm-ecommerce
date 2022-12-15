const priceFormat = (n) => {
  // //Hàm định dạng giá tiền
  // n = n * 1;
  // return n.toLocaleString("it-IT", { style: "currency", currency: `VND` });
  // // currency- Định dạng tiền tệ, chỉ định đơn vị tiền tệ cụ thể

  return n.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default priceFormat;
