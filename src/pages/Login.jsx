import React, { useState } from "react";
import { Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { authActions } from "../Redux/slices/auth-slice";

import "../styles/auth.css";
import { toast } from "react-toastify";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userArr = JSON.parse(localStorage.getItem("userArr")) || [];
  // console.log("userArr", userArr);

  const onChangeEmail = (e) => {
    setEnteredEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setEnteredPassword(e.target.value);
  };

  const validateForm = () => {
    userArr.forEach((user) => {
      const isUser =
        user.email === enteredEmail && user.password === enteredPassword;

      if (isUser) {
        console.log("Đăng nhập thành công!");
        localStorage.setItem("currentUser", JSON.stringify(user));
        // cập nhật lại trạng thái user
        dispatch(authActions.ON_LOGIN(user));
        toast.success("Successful login!");
        navigate("/");
      } else {
        console.log("Đăng nhập thất bại!!");
      }
    });
    return;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(null);

    // Kiểm tra xem user có nhập đủ thông tin hay chưa
    if (!enteredEmail || !enteredPassword) {
      setError("Plese fill all infomation !!");
      return;
    }

    // kiểm tra xem hợp lệ form
    if (!validateForm()) {
      setError(
        '"Your account name or Password is incorrect, please try again !!"'
      );
      setEnteredPassword("");
      return;
    }
  };

  return (
    <div className="limiter">
      <Container className="auth login">
        <div className="auth__wrapper">
          <span className="auth__form-title ">Sign In</span>

          {error && <p className="text-danger text-center pb-5">{error}</p>}

          <form onSubmit={submitHandler}>
            {/* input email */}
            <div className="wrapper__input validate-input">
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
                value={enteredPassword}
                onChange={onChangePassword}
              />
            </div>

            <div className="auth__form-btn">
              <button>sign in</button>
            </div>
          </form>

          <div className="text__link">
            <span>Create an account?</span>
            &nbsp;
            <Link to="/register">Sign up</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
