import React, { Component } from "react";
import logo from "../../assets/logo.png";
import FHome from "./FHome";

export default class Navbar extends Component {
  state = {
    loggedIn: true,
  };
  render() {
    let cart;
    let profile, logout;
    if (this.state.loggedIn === true) {
      profile = (
        <ul className="navbar-nav">
          {" "}
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span
                className="fa fa-user fa-2x"
                style={{ color: "#f2f2f3  " }}
                aria-hidden="true"
              ></span>
            </a>
            <div
              className="dropdown-menu"
              // aria-labelledby="navbarDropdown"
            >
              <a
                className=""
                href="/vendor/Profile"
                id="navbarDropdown"
                role="button"
                // data-toggle="dropdown"

                style={{ textDecoration: "none" }}
              >
                <img
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width="50"
                  height="50"
                  class="rounded-circle content-center"
                />{" "}
                username
              </a>

              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {/* <a class="dropdown-item" href="/farmer/Prof">
                  Profile
                </a> */}
                <a class="dropdown-item" href="/vendor/editProfile">
                  Edit Profile
                </a>
                <a class="dropdown-item" href="#">
                  <span
                    className="fa fa-sign-out fa-2x"
                    style={{ color: "#f2f2f3  " }}
                    aria-hidden="true"
                  ></span>
                  Log Out
                </a>
              </div>
            </div>
          </li>
        </ul>
      );
      // logout = (
      //   <a
      //     type="b                                                       utton"
      //     className="btn  navbar-toggle-box-collapse d-none d-md-block "
      //     href="/Login/farmer"
      //     title="Logout"
      //   >
      //     <span
      //       className="fa fa-sign-out fa-2x"
      //       style={{ color: "#f2f2f3  " }}
      //       aria-hidden="true"
      //     ></span>
      //   </a>
      // );
    } else {
      profile = (
        <a
          type="button"
          className="btn  navbar-toggle-box-collapse d-none d-md-block "
          href="vendor/Login/vendor"
          title="Profile"
        >
          <span
            className="fa fa-user fa-2x"
            style={{ color: "#f2f2f3  " }}
            aria-hidden="true"
          ></span>
        </a>
      );
    }
    return (
      <nav className="navbar navbar-default navbar-expand-md fixed-top navbar-trans navf">
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a className="logo" href="/vendor/Home">
            <img src={logo} alt="" className=""></img>
            {/* Farm
            <span className="color-b">Easy</span> */}
          </a>
          <button
            type="button"
            className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-expanded="false"
          >
            <span className="fa fa-search" aria-hidden="true"></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-center"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " href="/vendor/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vendor/orders">
                  Orders
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/vendor/addItems">
                    Add
                  </a>
                  <a className="dropdown-item" href="/vendor/ShowI">
                    Show
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {profile}
          {logout}
          {/* <button
            type="button"
            className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-expanded="false"
          >
            <span className="fa fa-search" aria-hidden="true"></span>
          </button> */}
          {/* <a
            type="button"
            className="btn navbar-toggle-box-collapse d-none d-md-block "
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-expanded="false"
            href="/cart"
            title="Cart"
          >
          
          </a> */}
        </div>
      </nav>
    );
  }
}
