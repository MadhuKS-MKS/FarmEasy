import React, { Component } from "react";
// import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

class Registration extends Component {
  state = {
    // name={},
  };

  render() {
    return (
      <div className="container mt-5  ">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="jumbotron" id="login-second">
            <div class="page-wrapper p-t-50 p-b-50">
              <div class="wrapper wrapper--w900">
                <div class="card cardH card-6 bg-dark">
                  <div class="card-heading">
                    <h2 class="title text-primary ">Sign Up</h2>
                  </div>
                  <div class="card-body  text-light">
                    <form method="POST">
                      <div class="form-row">
                        <div class="name">Full name</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Email address</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder="example@email.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Password</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Re-Password</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Upload Documents</div>
                        <div class="value">
                          <div class="input-group js-input-file">
                            <input
                              class="input-file"
                              type="file"
                              name="file_doc"
                              id="file"
                            />
                            <label class="label--file" for="file">
                              Choose file
                            </label>
                            <span class="input-file__info">No file chosen</span>
                          </div>
                          <div class="label--desc">
                            Upload your Document/Id proff or any other relevant
                            file. Max file size 50 MB
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn--radius-2 btn-success" type="submit">
                      Send Application
                    </button>
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
