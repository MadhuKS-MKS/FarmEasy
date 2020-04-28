import React, { Component } from "react";
import axios from "axios";

import "../CSS/Home.css";
import "../CSS/animate.css";
import "../CSS/App.css";

import Home from "../publics/Home";
import Navbar from "../publics/Navbar";
import Footer from "../publics/Footer";
import Contact from "../publics/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Showitems from "../publics/Showitems";
import UserProf from "../publics/UserProf";
import Forgotpasswrd from "../Forgotpsswrd";
import Registration from "./Registration";
import cart from "./cart";
import editProf from "../publics/editProf";
import QuickModel from "./QuickModel";
import PrivateRoute from "../utils/PrivateRoute";

// import quickModel from "./quickModel";
import ItemsList from "./ItemsList";
import quickModel from "./QuickModel";

export default class All extends Component {
  state = {
    users: [],
    products: [],
    category: [],
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
  render() {
    return (
      <Router>
        <Navbar />
        <div className="">
          <Switch>
            {" "}
            {/* <Route exact path={"/Login/:type"} component={Login} /> */}
            {/* <Route path={"/farmer/fsignup"} component={fRegistration} /> */}
            <Route path={"/reset"} component={Forgotpasswrd} />
            <Route path={"/signup/:role"} component={Registration} />
          </Switch>
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/Contact"} component={Contact} />
            {/* <Route path={"/Showitems"} component={Showitems} /> */}
            <Route
              exact
              path={"/showitems"}
              render={(props) => (
                <ItemsList
                  {...props}
                  user={this.state.user}
                  getproducts={this.getproducts}
                  getCategory={this.getCategory}
                  products={this.state.products}
                  category={this.state.category}
                />
              )}
            />

            <PrivateRoute role="user" path={"/cart"} component={cart} />
            <PrivateRoute
              role="user"
              path={"/user/userprofile"}
              component={UserProf}
            />
            <PrivateRoute
              role="user"
              path={"/user/editprofile/:id"}
              component={editProf}
            />
            <Route path={"/user/Item"} component={QuickModel} />
            {/* <PrivateRoute role="user" component={quickModel} /> */}
            {/* <PrivateRoute
              role="user"
              path={"/user/editprofile/:id"}
              component={() => (
                <editProf getUser={this.getUser} user={this.state.user} />
              )}
            /> */}
          </Switch>
        </div>

        <Footer />
      </Router>
    );
  }
}
