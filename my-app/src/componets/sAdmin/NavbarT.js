import React, { Component } from "react";
import logo from "../../assets/logo.png";

export default class NavbarT extends Component {
  render() {
    return (
      <nav class="navbar default-layout-navbar bg-gradient-success col-lg-12 col-12 p-0 fixed-top d-flex flex-row ">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a class="navbar-brand brand-logo" href="index.html">
            <img src={logo} alt="logo" width="150px" />
          </a>
          <a class="navbar-brand brand-logo-mini" href="/admin/Home">
            <img src={logo} alt="logo" width="150px" />
          </a>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-stretch">
          <div class="search-field d-none d-md-block">
            <form class="d-flex align-items-center h-100" action="#">
              <div class="input-group">
                <div class="input-group-prepend bg-transparent">
                  <i class="input-group-text border-0 bg-white mdi mdi-magnify"></i>
                </div>
                <input
                  type="text"
                  class="form-control bg-transparent border-0"
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
                    alt="image"
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

            {/* <li class="nav-item nav-logout d-none d-lg-block">
              <a class="nav-link" href="#">
                <i class="mdi mdi-power"></i>
              </a>
            </li> */}
          </ul>
          <button
            class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}
