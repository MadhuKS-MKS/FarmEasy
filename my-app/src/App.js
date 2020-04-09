import React, { Fragment } from "react";
import Login from "./componets/Login";
import "./componets/CSS/Home.css";

import Footer from "./componets/publics/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllF from "./componets/vendor/AllF";
import FNavbar from "./componets/vendor/FNavbar";

import All from "./componets/publics/All";

import AHome from "./componets/sAdmin/AHome";

function App() {
  //  state = {

  //    user: {}
  //  };
  //  LoginUser = async text => {
  //    const res = await axios.post(
  //    ` http://localhost:5000/api/auth/`
  //    );
  //    console.log(res.data.items);
  //    this.setState({
  //      users: res.data.items
  //    });
  //  };

  return (
    <Router>
      <div className="">
        {/* <Navbar /> */}
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}
        <Switch>
          {" "}
          <Route exact path={"/Login/:type"} component={Login} />
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
        </Switch>

        <FNavbar />

        <Switch>
          <Route path={"/vendor/"} component={AllF} />

          <Route exact path={"/admin"} component={AHome} />

          <All></All>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
