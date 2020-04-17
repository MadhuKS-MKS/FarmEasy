import React, { Fragment, useReducer } from "react";

import Login from "./componets/Login";
import fRegistration from "./componets/vendor/Registration";
import "./componets/CSS/Home.css";
import axios from "axios";

import Footer from "./componets/publics/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllF from "./componets/vendor/AllF";
import FNavbar from "./componets/vendor/FNavbar";

import All from "./componets/publics/All";
// import Alert from "./componets/publics/Alert";

import AHome from "./componets/sAdmin/AHome";

class App extends React.Component {
  getUsers = async (body) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // const body = {};
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        body,
        config
      );
      this.setState({
        users: res.data.data,
      });
      console.log(res.data.data);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <Router>
        <div className="">
          {/* <Alert alert={this.state.alert} />
          <Navbar /> */}
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}
          <Switch>
            <Route exact path={"/Login/:type"} component={Login} />
            <Route
              exact
              path={"/Login/:type"}
              render={(props) => (
                <Login
                  {...props}
                  // type={this.state.user}
                  getUser={this.getUsers}
                  user={this.state.user}
                />
              )}
            />
          </Switch>
          <FNavbar />
          <Switch>
            <Route path={"/vendor/"} component={AllF} />

            <Route exact path={"/admin"} component={AHome} />

            <All></All>
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
