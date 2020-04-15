import React, { Component, useState } from "react";
import "./CSS/App.css";
import axios from "axios";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // componentDidMount() {
  const type = props.match.params;
  // };
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      // setAlert('Please fill in all fields', 'danger');
    } else {
      const body = {
        email,
        password,
      };
      this.props.getuser(body);
    }
  };
  // render() {

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
    if (email == "") {
      social = "#ffc312";
      // login = (
      //   <a href={`/`} style={{ textDecoration: "none" }}>
      //     Login
      //   </a>
      // );
    } else {
      console.log("err");
    }
  } else {
    if (email == "") {
      social = "#49b5e7";
      // login = (
      //   // <a href={`/vendor/Home`} style={{ textDecoration: "none" }}>
      //   //   Login
      //   // </a>
      // );
    }
  }

  return (
    <div className="container logintop ">
      <div className="">
        {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
        <div className="jumbotron " id="login-second">
          <div className="container">
            <div className="d-flex justify-content-center">
              <div class="area">
                <ul class="circles">
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
                  <h3 className="mt-5">Sign In As {type}</h3>
                  <div className="d-flex justify-content-end" id="social_icon">
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
                  <form onSubmit={onSubmit}>
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
                        placeholder="Email"
                        value={email}
                        onChange={onChange}
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
                        className="form-control"
                        placeholder="password"
                        value={password}
                        onChange={onChange.bind(this)}
                      />
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        value="Login"
                        className="btn float-right login_btn btn-block "
                        style={{
                          backgroundColor: social,
                        }}
                        Login
                      ></button>
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
    </div>
  );
  // }
};

export default Login;
