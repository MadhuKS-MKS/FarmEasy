import React, { Component } from "react";
import axios from "axios";

import "../CSS/Home.css";
import "../CSS/animate.css";
import "../CSS/App.css";

import Home from "../publics/Home";
import Navbar from "../publics/Navbar";
// import Footer from "../publics/Footer";
import Contact from "../publics/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Showitems from "../publics/Showitems";
import UserProf from "../publics/UserProf";
import Forgotpasswrd from "../Forgotpsswrd";
import Registration from "./Registration";
import cart from "./cart";
import editProf from "../publics/editProf";
import fRegistration from "../vendor/Registration";
// import quickModel from "./quickModel";
import ItemsList from "./ItemsList";

export default class All extends Component {
  state = {
    users: [],
    products: [],
  };
  getproducts = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/products/",
        config
      );
      this.setState({
        products: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <Router>
        <div className="">
          <Switch>
            {" "}
            {/* <Route exact path={"/Login/:type"} component={Login} /> */}
            {/* <Route path={"/farmer/fsignup"} component={fRegistration} /> */}
            <Route path={"/reset"} component={Forgotpasswrd} />
            <Route path={"/signup/"} component={Registration} />
            <Route path={"/fsignup"} component={fRegistration} />
          </Switch>
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/Contact"} component={Contact} />
            {/* <Route path={"/Showitems"} component={Showitems} /> */}
            <Route
              exact
              path={"/Showitems"}
              render={(props) => (
                <ItemsList
                  {...props}
                  user={this.state.user}
                  getproducts={this.getproducts}
                  products={this.state.products}
                />
              )}
            />

            <Route path={"/cart"} component={cart} />
            <Route path={"/user/userprofile"} component={UserProf} />
            <Route path={"/user/editprofile"} component={editProf} />
          </Switch>
        </div>

        {/* <Footer /> */}
      </Router>
    );
  }
}
