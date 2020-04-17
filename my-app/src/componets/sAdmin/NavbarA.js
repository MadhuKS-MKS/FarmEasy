import React, { Component } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "../CSS/admin.css";

export default class NavbarA extends Component {
  render() {
    return (
      <nav
        className="sidebar sidebar-offcanvas bg-gradient-success "
        id="sidebar"
      >
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                <img
                  src="https://www.shareicon.net/data/2016/08/18/813864_people_512x512.png"
                  alt="profile"
                  width="40px"
                />
                <span className="login-status online"></span>
                {/* <!--change to offline or busy as needed--> */}
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2 text-light">Maddy</span>
                <span className="text-dark text-small">Project Manager</span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/admin/">
              <span className="menu-title">Dashboard</span>
              <i className="mdi mdi-home menu-icon"></i>
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#menu3"
              className="nav-link collapsed"
              data-toggle="collapse"
              data-parent="#sidebar"
              aria-expanded="false"
              id="dropdwn"
            >
              <span className="">Seller</span>
              <i className="mdi mdi-contacts menu-icon"></i>
            </a>
            <div
              className="collapse submenu "
              id="menu3"
              aria-labelledby="dropdwn"
            >
              <a
                href="/verifiedseller"
                className="list-group-item"
                data-parent="#menu3"
              >
                List Varified Sellers
              </a>
              <a
                href="/application"
                className="list-group-item"
                data-parent="#menu3"
              >
                Application Varify
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <span className="menu-title">Buyyers</span>
              <i className="mdi mdi-chart-bar menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <span className="menu-title">Order Lists</span>
              <i className="mdi mdi-table-large menu-icon"></i>
            </a>
          </li>

          <li className="nav-item sidebar-actions">
            <span className="nav-link">
              <div className="border-bottom">
                <h6 className="font-weight-normal mb-3">Projects</h6>
              </div>
              <button className="btn btn-block btn-lg btn-gradient-primary mt-4">
                + Add a project
              </button>
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}
