import React, { Component } from "react";
// import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      role: "vendor",
    };
    this.onChange = this.onChange.bind(this);
  }
  // Input on change
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  // Login
  onSubmit = async (e) => {
    e.preventDefault();

    const reg = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };

    const body = JSON.stringify(reg);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // console.log(body);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/auth/register`,
        body,
        config
      );
      console.log(res.data.token);
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("isAuth", true);
      // console.log(sessionStorage);
      this.setState({
        isAuth: true,
      });
    } catch (error) {}
  };
  render() {
    return (
      <div className="container mt-5  ">
        <div className=" mt-5  pt-5">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="jumbotron" id="login-second">
            <div className="">
              <div className="wrapper wrapper--w900">
                <div className="card cardH card-6 bg-dark">
                  <div className="card-heading">
                    <h2 className="title text-primary ">Sign Up</h2>
                  </div>
                  <div className="card-body  text-light">
                    <form onSubmit={this.onSubmit}>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            // style={{ background: social }}
                          >
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            // style={{ background: social }}
                          >
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="email"
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
                            // style={{ background: social }}
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
                          // style={{
                          //   backgroundColor: social,
                          // }}
                        >
                          SignUp
                        </button>
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
export default Registration;
