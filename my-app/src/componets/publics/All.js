import React from "react";

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
import Login from "../Login";
import quickModel from "./quickModel";

export default class All extends React.Component {
  state = {
    users: [],
    products: [],
  };
  getProducts = async () => {
    // const res = await axios.get(`https://api/v1/products`);
    // // console.log(res.data);
    // this.setState({
    //   user: res.data,
    // });
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
                <Showitems
                  {...props}
                  user={this.state.user}
                  getProducts={this.getProducts}
                  products={this.state.products}
                />
              )}
            />
            <Route path={"/user/quickModel"} component={quickModel} />
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
