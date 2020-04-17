import React, { Component, useState } from "react";
import "./CSS/App.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
const superagent = require("superagent");

class Login extends Component {
  constructor(props) {
    super(props);

    this.getUser = this.getUser;
    this.state = {
      email: "",
      password: "",
      type: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.state.type = this.props.match.params;
    // this.props.getuser();
  }
  // handleEmailChange(e) {
  //   this.setState({
  //     email: e.target.value,
  //   });
  // }
  // handlePasswordChange(e) {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    superagent
      .post("http://localhost:5000/api/v1/auth/login")
      .send({ email: this.state.email, password: this.state.password })
      .end((err, res) => {
        if (err) {
          this.setState({ errrorMessage: "Authenticstion Failed" });
          return;
        }
        console.log(res.body);
      });
  };
  isAuthenticated() {
    const token = localStorage.getItem("token");
    return token && token.length > 10;
  }
  render() {
    const type = this.state.type;
    let social = {};
    let signup, login;
    if (type === "user") {
      social = "#ffc312";
      signup = <a href={`/signup`}>Sign Up</a>;
    } else {
      social = "#49b5e7";
      signup = <a href={`/fsignup`}>Sign Up</a>;
    }
    if (type === "user") {
      if (this.state.email == "") {
        social = "#ffc312";
      } else {
        console.log("err");
      }
    } else {
      if (this.state.email == "") {
        social = "#49b5e7";
      }
    }

    return (
      <div className="container logintop ">
        {/* {this.isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/admin",
            }}
          />
        ) : ( */}
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="jumbotron " id="login-second">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="area">
                  <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className="card animated bounce" id="login-card">
                  <div className="card-header">
                    <h3 className="mt-5">Sign In As </h3>
                    <div
                      className="d-flex justify-content-end"
                      id="social_icon"
                    >
                      <span style={{ color: social }}>
                        <i className="fa fa-facebook-square"></i>
                      </span>
                      <span style={{ color: social }}>
                        <i className="fa fa-google-plus-square"></i>
                      </span>
                      <span style={{ color: social }}>
                        <i className="fa fa-twitter-square"></i>
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: social }}
                          >
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: social }}
                          >
                            <i className="fa fa-key"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          placeholder="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          value="Login"
                          name="submit"
                          className="btn float-right login_btn btn-block "
                          style={{
                            backgroundColor: social,
                          }}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                      Don't have an account?
                      {signup}
                    </div>
                    <div className="d-flex justify-content-center">
                      <a href="/reset">Forgot your password?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        // )} // ;
      </div>
    );
  }
}

export default Login;
