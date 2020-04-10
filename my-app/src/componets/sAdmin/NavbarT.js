import React, { Component } from "react";
import logo from "../../assets/logo.png";

export default class NavbarT extends Component {
  render() {
    return (
      <nav className="navbar default-layout-navbar bg-gradient-success col-lg-12 col-12 p-0 fixed-top d-flex flex-row ">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo" href="index.html">
            <img src={logo} alt="logo" width="150px" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="/admin/Home">
            <img src={logo} alt="logo" width="150px" />
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <div className="search-field d-none d-md-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent">
                  <i className="input-group-text border-0 bg-white mdi mdi-magnify"></i>
                </div>
                <input
                  type="text"
                  className="form-control bg-transparent border-0"
                  placeholder="Search projects"
                />
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            <li className=" nav-item nav-profile ">
              <a
                className=" nav-link dropdown-toggle"
                id="profileDropdown"
                role="button"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="nav-profile-img">
                  <img
                    src="https://www.shareicon.net/data/2016/08/18/813864_people_512x512.png"
                    alt=""
                    width="35px"
                  />
                  <span className="availability-status online"></span>
                </div>
                <div className="nav-profile-text">
                  <p className="mb-0 ml-2 text-black">Maddy</p>
                </div>
              </a>
              <div className="dropdown-menu " aria-labelledby="profileDropdown">
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-cached mr-2 text-success"></i> Activity
                  Log{" "}
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-logout mr-2 text-primary"></i> Signout{" "}
                </a>
              </div>
            </li>

            {/* <li className="nav-item nav-logout d-none d-lg-block">
              <a className="nav-link" href="#">
                <i className="mdi mdi-power"></i>
              </a>
            </li> */}
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}
