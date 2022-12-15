import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

import BannerHome from "../components/Banner/BannerHome";
import CategoriesList from "../components/Home/CategoriesList";
import TrendingProducts from "../components/Home/TrendingProducts";
import Services from "../components/Home/Services";
import InfoSubscribe from "../components/Home/InfoSubscribe";
import Popup from "../components/Home/Popup/Popup";

import "../styles/home.css";

const Home = () => {
  const show = useSelector((state) => state.popup.showPopup);
  const popupData = useSelector((state) => state.popup.data);

  return (
    <>
      <Container>
        {/* banner */}
        <BannerHome />
        {/* browse our categories*/}
        <CategoriesList />
        {/* top trending products */}
        <TrendingProducts />
        {/* popup product */}
        {show && <Popup item={popupData} show={show} />}
        {/* other infomation servicer */}
        <Services />
        {/* other infomation email subscribe */}
        <InfoSubscribe />
      </Container>
    </>
  );
};

export default Home;

/*
a. Banner
Khi click vào nút "Browse collections" thì sẽ được chuyển sang trang ShopPage.

                ********************
b. Danh sách các danh mục

Bạn sẽ có hiệu ứng hover mỗi khi di chuyển con trỏ chuột vào mỗi danh mục như thiết kế bên trên.

Khi click vào danh mục nào thì cũng sẽ được chuyển hướng về ShopPage.

                ********************
c. Danh sách các sản phẩm

_id: Mã sản phẩm
name: Tên sản phẩm
price: Giá tiền của sản phẩm.
category: Danh mục của sản phẩm
short_desc: Mô tả ngắn gọn về sản phẩm
long_desc: Mô tả đầy đủ về sản phẩm
img1. img2. img3, img4: Mỗi thuộc tính là một link ảnh cho sản phẩm

-- Khi hiển thị danh sách các sản phẩm:

Chỉ hiển thị tối đa 8 phần tử đầu tiên của danh sách trả về từ API.

Hình ảnh để hiển thị ở danh sách sẽ là thuộc tính img1.

price sẽ ở kiểu số, bạn sẽ cần chuyển đổi thành dạng chuỗi vào bổ sung các dấu chấm ngăn cách giữa các đơn vị. Ví dụ "10999000" sẽ thành "10.999.000".


*/
