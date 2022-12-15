import React, { useState } from "react";
import { Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import validateEmail from "../utils/validateEmail";
import validatePhone from "../utils/validatePhone";

import "../styles/auth.css";

const Register = () => {
  // Lấy thông tin user từ localStorage
  const userArr = JSON.parse(localStorage.getItem("userArr")) || [];
  // console.log("userArr", userArr);

  const navigate = useNavigate();

  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [error, setError] = useState("");

  const onChangeFullName = (e) => {
    setEnteredFullName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEnteredEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setEnteredPassword(e.target.value);
  };

  const onChangePhone = (e) => {
    setEnteredPhone(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(null); // render lại error mỗi lần submit lại
    // console.log(enteredFullName, enteredEmail, enteredPassword, enteredPhone);

    // kiểm tra user có nhập đầy đủ các thông tin hay không?
    if (
      !enteredFullName ||
      !enteredEmail ||
      !enteredPassword ||
      !enteredPhone
    ) {
      setError("Please fill all infomation !!");
      return;
    }

    // Email sẽ 0 được trùng với các tài khoản đã có.
    for (let i = 0; i < userArr.length; i++) {
      if (userArr[i].email === enteredEmail) {
        setError("The email has been used, please change it to another email.");
        return;
      }
    }

    // Kiểm tra password khi đăng ký phải nhiều hơn 8 ký tự.
    if (enteredPassword.length < 8) {
      setError("Password must be minimum of 8 characters !!");
      return;
    }

    // Kiểm tra tính hợp lệ của email
    if (!validateEmail(enteredEmail)) {
      setError("Email is invalid !!");
      return;
    }

    // kiểm tra tính hợp lệ của sđt
    if (!validatePhone(enteredPhone)) {
      setError(
        "The phone number must be 10 characters and start with some of the numbers 84, 03,05,07,08 or 09!!"
      );
      return;
    }

    const userInfo = {
      name: enteredFullName,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
    };

    userArr.push(userInfo);
    localStorage.setItem("userArr", JSON.stringify(userArr));

    toast.success("Successful account registration!");
    navigate("/login"); // chuyển sang trang đăng nhập
  };

  return (
    <div className="limiter">
      <Container className="auth register">
        <div className="auth__wrapper">
          <span className="auth__form-title">Sign Up</span>

          {error && <p className="text-danger text-center pb-5">{error}</p>}

          <form onSubmit={submitHandler}>
            {/* input fullname */}
            <div className="wrapper__input validate-input">
              <input
                type="text"
                placeholder="Full Name"
                onChange={onChangeFullName}
              />
            </div>
            {/* input email */}
            <div className="wrapper__input validate-input rs1">
              <input
                type="email"
                placeholder="Email"
                onChange={onChangeEmail}
              />
            </div>
            {/* input password */}
            <div className="wrapper__input validate-input rs1">
              <input
                type="password"
                placeholder="Password"
                onChange={onChangePassword}
              />
            </div>
            {/* input password */}
            <div className="wrapper__input validate-input rs1">
              <input
                type="phone"
                placeholder="Phone"
                onChange={onChangePhone}
              />
            </div>

            <div className="auth__form-btn">
              <button>sign up</button>
            </div>
          </form>
          <div className="text__link">
            <span>Login?</span>
            &nbsp;
            <Link to="/login">Click</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
