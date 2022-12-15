function validatePhone(number) {
  const vnf_regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(number);

  if (number !== "") {
    if (!vnf_regex) {
      //   alert("Số điện thoại của bạn không đúng định dạng!");
      return false;
    } else {
      //   alert("Số điện thoại của bạn hợp lệ!");
      return true;
    }
  } else {
    // alert("Bạn chưa điền số điện thoại!");
    return false;
  }
}

export default validatePhone;
