import React, { Fragment, useReducer } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./componets/CSS/Home.css";

import Login from "./componets/Login";
import AllF from "./componets/vendor/AllF";
import FNavbar from "./componets/vendor/FNavbar";
import All from "./componets/publics/All";
// import Alert from "./componets/publics/Alert";

import AHome from "./componets/sAdmin/AHome";
import PrivateRoute from "./componets/utils/PrivateRoute";
// import PublicRoutes from "./componets/util/PublicRoute";

class App extends React.Component {
  state = {
    role: "",
  };
  // isAuthenticated = this.isAuthenticated();

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
          </Switch>
          <FNavbar />
          <Switch>
            <PrivateRoute role="vendor" path={"/vendor/"} component={AllF} />

            <PrivateRoute
              role="admin"
              exact
              path={"/admin"}
              component={AHome}
            />
            {/* <PrivateRoute role="user" path={"/"} component={All} /> */}

            <All></All>
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
