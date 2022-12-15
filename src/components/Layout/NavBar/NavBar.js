import React, { useRef } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../Redux/slices/auth-slice";

import LogoutLink from "../../Auth/LogoutLink";
import LoginLink from "../../Auth/LoginLink";
import Name from "../../Auth/Name";

import "./NavBar.css";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  // console.log("isAuth", isAuth);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.ON_LOGOUT());
    localStorage.removeItem("currentUser");
  };

  const menuRef = useRef(null);

  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <nav className="navbar navbar-expand-lg navbar-light py-3 align-items-center">
            <Link className="navbar-brand" to="/">
              <h1>Boutique</h1>
            </Link>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <div className="menu">
                <ul className="menu__left">
                  <li className="nav-item ms-1">
                    <NavLink
                      to="/home"
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/shop"
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      Shop
                    </NavLink>
                  </li>
                </ul>

                <ul className="menu__right align-items-center">
                  <li className="nav-item">
                    <NavLink
                      to="/cart"
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      <i className="fas fa-dolly-flatbed me-1 text-muted"></i>
                      Cart
                    </NavLink>
                  </li>
                  {user ? <Name /> : ""}
                  {!isAuth ? (
                    <LogoutLink />
                  ) : (
                    <LoginLink onLogout={logoutHandler} />
                  )}
                </ul>
              </div>
            </div>
            <div className="mobile__menu">
              <span onClick={menuToggle}>
                <i className="fas fa-bars"></i>
              </span>
            </div>
          </nav>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
