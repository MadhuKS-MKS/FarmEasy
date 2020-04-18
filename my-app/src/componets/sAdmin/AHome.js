import React, { Component, Link } from "react";
import "../CSS/admin.css";
import NavbarT from "./NavbarT";
import NavbarA from "./NavbarA";
import Dashboard from "./Dashboard";

import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // useParams,
  // useRouteMatch
} from "react-router-dom";
import Category from "./Category";

export default class AHome extends Component {
  state = {
    users: [],
    products: [],
    category: [],
    orders: [],
    vendors: [],
    publics: [],
  };

  getCategory = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/category/",
        config
      );
      this.setState({
        category: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  getproducts = async (catid) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/category/${catid}/products`,
        config
      );
      this.setState({
        products: res.data.data,
      });
    } catch (err) {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/products`,
        config
      );
      this.setState({
        products: res.data.data,
      });
      // console.log("Can't load the items");
    }
  };
  getusers = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/users`,
        config
      );
      this.setState({
        orders: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  getpublic = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/public`,
        config
      );
      this.setState({
        publics: res.data.data,
      });
      console.log(res.data.data);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  getvendors = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/vendors`,
        config
      );
      this.setState({
        vendors: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  getorders = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/public/cart/orders/`,
        config
      );
      this.setState({
        orders: res.data.data,
      });
    } catch (err) {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/products`,
        config
      );
      this.setState({
        products: res.data.data,
      });
      // console.log("Can't load the items");
    }
  };
  render() {
    return (
      <Router>
        <div>
          <div className="container-scroller">
            <NavbarT />

            {/* <!-- partial --> */}
            <div className="container-fluid page-body-wrapper">
              {/* <!-- partial:partials/_sidebar.html --> */}
              <NavbarA />
              {/* <!-- partial --> */}
              <div className="main-panel">
                <Switch>
                  <Route
                    path={"/category"}
                    render={(props) => (
                      <Category
                        {...props}
                        getcategory={this.getCategory}
                        category={this.state.category}
                        // user={this.state.user}
                      />
                    )}
                  />
                  <Route
                    exact
                    path={"/admin"}
                    render={(props) => (
                      <Dashboard
                        {...props}
                        getCategory={this.getCategory}
                        getusers={this.getusers}
                        getpublic={this.getpublic}
                        getorders={this.getorders}
                        getvendors={this.getvendors}
                        publics={this.state.publics}
                        category={this.state.category}
                        users={this.state.user}
                        orders={this.state.orders}
                        vendors={this.state.vendors}
                      />
                    )}
                  />
                </Switch>{" "}
                {/* <!-- main-panel ends --> */}
                <footer className="footer">
                  <div className="d-sm-flex justify-content-center justify-content-sm-between">
                    <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                      Copyright © 2020{" "}
                      {/* <Link to="https://www.bootstrapdash.com/" target="_blank">
                        BootstrapDash
                      </Link> */}
                      . All rights reserved.
                    </span>
                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                      Hand-crafted &amp; made with{" "}
                      <i className="mdi mdi-heart text-danger"></i>
                    </span>
                  </div>
                </footer>
              </div>
            </div>
            {/* <!-- page-body-wrapper ends --> */}
          </div>
        </div>
      </Router>
    );
  }
}
