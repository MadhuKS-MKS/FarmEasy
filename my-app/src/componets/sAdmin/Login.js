import React, { Component } from "react";
import "./CSS/App.css";

class Login extends Component {
  state = {
    username: "admin",
    password: "123456",
    type: "admin",
  };

  componentDidMount() {
    this.setState(() => ({
      type: this.props.match.params,
    }));
  }
  onChange(e) {
    this.setState({ username: e.target.value });
    this.setState({ password: e.target.value });
    // console.log("123");
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.username === "") {
      // this.props.setAlert("Please Enter Something", "light");
      console.log(this.state.username);
    } else {
      console.log(this.state.username);

      // this.props.searchUser(this.state.text);
      // this.setState({ text: "" });
    }
  };
  render() {
    // console.log(this.props.match.params);
    // const { type } = this.props.match.params;
    const username = this.state.username;
    const password = this.state.password;
    const { type } = this.state.type;
    let social = {};
    let signup, login;
    if (type === "admin") {
      social = "#ffc312";
      signup = <a href={`/admin`}>Sign Up</a>;
    }
    if (type === "user") {
      if (username == "") {
        social = "#ffc312";
        login = (
          <a href={`/`} style={{ textDecoration: "none" }}>
            Login
          </a>
        );
      } else {
        console.log("err");
      }
    } else {
      if (username == "") {
        social = "#49b5e7";
        login = (
          <a href={`/vendor/Home`} style={{ textDecoration: "none" }}>
            Login
          </a>
        );
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
                          placeholder="username"
                          value={this.state.username}
                          onChange={this.onChange.bind(this)}
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
                          onChange={this.onChange.bind(this)}
                        />
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          value="Login"
                          className="btn float-right login_btn btn-block"
                          style={{
                            backgroundColor: social,
                          }}
                        >
                          {login}
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
      </div>
    );
  }
}

export default Login;
