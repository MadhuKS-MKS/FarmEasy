import React, { Fragment } from "react";
import Login from "./componets/Login";
import fRegistration from "./componets/vendor/Registration";
import "./componets/CSS/Home.css";

import Footer from "./componets/publics/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllF from "./componets/vendor/AllF";
import FNavbar from "./componets/vendor/FNavbar";

import All from "./componets/publics/All";
// import Alert from "./componets/publics/Alert";

import AHome from "./componets/sAdmin/AHome";

class App extends React.Component {
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
  // state = {
  //   alert: null,
  // };
  // setAlert = (msg, type) => {
  //   this.setState({ alert: { msg, type } });
  //   setTimeout(() => this.setState({ alert: null }), 5000);
  // };
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
            <Route path={"/vendor/"} component={AllF} />

            <Route exact path={"/admin"} component={AHome} />

            <All></All>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
