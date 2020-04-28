import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import logo from "../../assets/logo.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    // this.getUser = this.getUser;
    this.state = {
      email: "",
      password: "",
      type: "",
      user: "",
      items: [],
      isAuth: false,
    };
    this.onLogout = this.onLogout.bind(this);
  }
  componentWillMount = async () => {
    this.setState({
      isAuth: sessionStorage.getItem("isAuth"),
    });
    // getting user
    if (this.state.isAuth) {
      const token = sessionStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get(
        `http://localhost:5000/api/v1/auth/me`,
        config
      );
      this.setState({
        user: res.data.data,
      });
      const result = await axios.get(
        `http://localhost:5000/api/v1/public/cart`,
        config
      );
      this.setState({
        items: result.data.data,
      });
      console.log(this.state.items);
    }
  };
  onLogout = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.get("http://localhost:5000/api/v1/auth/logout", config);
      sessionStorage.removeItem("token", "isAuth");
      alert("Logged Out");
      this.setState({
        isAuth: false,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
    sessionStorage.clear();
  };
  render() {
    // console.log(this.state.isAuth);
    let cart;
    let profile;
    if (this.state.isAuth === "true") {
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
              {this.state.items.map((item) => (
                <li key={item._id}>
                  <span className="item">
                    <span className="item-left">
                      {/* <img src="http://lorempixel.com/50/50/" alt="" /> */}
                      <span className="item-info">
                        <span>{item.title}</span>
                        <span>{item.rate}</span>
                      </span>
                    </span>
                    <span className="item-right">
                      <button className="btn btn-xs btn-danger pull-right">
                        x
                      </button>
                    </span>
                  </span>
                </li>
              ))}

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
                <Link
                  className="btn btn-success text-center pull-right mt-3 mr-3"
                  to={{
                    pathname: "/cart",
                    state: {
                      user: this.state.user._id,
                    },
                  }}
                >
                  View Cart
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      );
      profile = (
        <ul className="navbar-nav ml-5">
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
            <div className="dropdown-menu">
              <a
                className=" "
                href="/user/userprofile"
                style={{ textDecoration: "none" }}
              >
                <img
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width="50"
                  height="50"
                  className="rounded-circle content-center"
                />
                {this.state.user.name}
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {/* <a className="dropdown-item" href="/farmer/Prof">
                  Profile
                </a> */}

                <a
                  type="submit"
                  className="dropdown-item"
                  poiter="cursor"
                  onClick={this.onLogout}
                >
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
            {/* NavBar Links  */}
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
                <a className="nav-link" href="/showitems">
                  Products
                </a>
              </li>

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
            {profile}
          </div>
        </div>
      </nav>
    );
  }
}
