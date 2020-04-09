import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FHome from "./FHome";
import fRegistration from "./Registration";
import FNavbar from "./FNavbar";
import addItems from "./addItems";
import showI from "./ShowI";
import Prof from "./Prof";
import editProf from "./editProf";
import orders from "./orders";

function App() {
  return (
    <Router>
      <div className="">
        <FNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/vendor/Home"} component={FHome} />
          <Route path={"/vendor/fsignup"} component={fRegistration} />
          <Route path={"/vendor/addItems"} component={addItems} />
          <Route path={"/vendor/showI"} component={showI} />
          <Route path={"/vendor/Profile"} component={Prof} />
          <Route path={"/vendor/editProfile"} component={editProf} />
          <Route path={"/vendor/orders"} component={orders} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
