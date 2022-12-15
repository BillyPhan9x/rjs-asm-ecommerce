import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";

const ProductList = () => {
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

  const currentCategory = useSelector((state) => state.category.value);
  // console.log("currentCategory", currentCategory);

  return (
    <>
      {/* khi category = all thì hiển thị tất cả product ( mặc định là all) */}
      {currentCategory === "all" &&
        data.map((value) => <ProductCard item={value} key={value._id.$oid} />)}

      {/* Khi category khác all thì đi so sánh với các giá trị category click vào và hiển thị các sản phẩm tương ứng */}
      {currentCategory !== "all" &&
        data.map(
          (value) =>
            value.category === currentCategory && (
              <ProductCard item={value} key={value._id.$oid} />
            )
        )}
    </>
  );
};

export default ProductList;
