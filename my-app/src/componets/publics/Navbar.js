import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default class Navbar extends Component {
  state = {
    loggedIn: true,
  };
  render() {
    let cart;
    let profile;
    if (this.state.loggedIn === true) {
      cart = (
        <ul className="nav navbar-nav navbar-left">
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              {" "}
              <span
                className="fa fa-shopping-cart fa-2x "
                aria-hidden="true"
                style={{ color: "#f2f2f3  " }}
              ></span>{" "}
            </a>
            <ul className="dropdown-menu dropdown-cart" role="menu">
              <li>
                <span className="item">
                  <span className="item-left">
                    <img src="http://lorempixel.com/50/50/" alt="" />
                    <span className="item-info">
                      <span>Item name</span>
                      <span>23$</span>
                    </span>
                  </span>
                  <span className="item-right">
                    <button className="btn btn-xs btn-danger pull-right">
                      x
                    </button>
                  </span>
                </span>
              </li>
              <li>
                <span className="item">
                  <span className="item-left">
                    <img src="http://lorempixel.com/50/50/" alt="" />
                    <span className="item-info">
                      <span>Item name</span>
                      <span>23$</span>
                    </span>
                  </span>
                  <span className="item-right">
                    <button className="btn btn-xs btn-danger pull-right">
                      x
                    </button>
                  </span>
                </span>
              </li>
              <li>
                <span className="item">
                  <span className="item-left">
                    <img src="http://lorempixel.com/50/50/" alt="" />
                    <span className="item-info">
                      <span>Item name</span>
                      <span>23$</span>
                    </span>
                  </span>
                  <span className="item-right">
                    <button className="btn btn-xs btn-danger pull-right">
                      x
                    </button>
                  </span>
                </span>
              </li>
              <li>
                <span className="item">
                  <span className="item-left">
                    <img src="http://lorempixel.com/50/50/" alt="" />
                    <span className="item-info">
                      <span>Item name</span>
                      <span>23$</span>
                    </span>
                  </span>
                  <span className="item-right">
                    <button className="btn btn-xs btn-danger pull-right">
                      x
                    </button>
                  </span>
                </span>
              </li>
              <li className="divider"></li>
              <li>
                <a
                  className="btn btn-success text-center pull-right mt-3 mr-3"
                  href="/cart"
                >
                  View Cart
                </a>
              </li>
            </ul>
          </li>
        </ul>
      );
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
                className=" "
                href="/user/userprofile"
                // id="navbarDropdown"
                // role="button"
                // data-toggle="dropdown"
                // aria-haspopup="true"
                // aria-expanded="false"
                style={{ textDecoration: "none" }}
              >
                <img
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width="50"
                  height="50"
                  className="rounded-circle content-center"
                />{" "}
                username
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {/* <a className="dropdown-item" href="/farmer/Prof">
                  Profile
                </a> */}
                <a className="dropdown-item" href="/user/editprofile">
                  Edit Profile
                </a>
                <a className="dropdown-item" href="#">
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
    }
    return (
      <nav className="navbar navbar-default navbar-expand-md fixed-top navbar-trans">
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
          <a className="logo" href="/">
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
                <a className="nav-link " href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#service">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Showitems">
                  Products
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="blog-grid.html">
                  Blog
                </a>
              </li> */}

              <li className="nav-item ">
                <a className="nav-link" href="/Contact">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown mr-5">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Login
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/Login/user">
                    As User
                  </a>
                  <a className="dropdown-item" href="/Login/vendor">
                    As Farmer
                  </a>
                </div>
              </li>
            </ul>
            {cart}
          </div>

          {profile}
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
