import React, { Component } from "react";
// import logo from "../assets/logo.jpg";
// import { Link } from "react-router-dom";
import "./CSS/App.css";

class Forgotpasswrd extends Component {
  render() {
    return (
      <div className="container ">
        <div className="frgtop">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="jumbotron " id="login-second">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="card" id="login-card">
                  <div className="card-header">
                    <h3 className="mt-5">Reset Password</h3>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: "#ffc312" }}
                          >
                            <i className="fa fa-envelope"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="email"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="submit"
                          value="Reset"
                          className="btn float-right login_btn btn-warning btn-block"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Forgotpasswrd;
