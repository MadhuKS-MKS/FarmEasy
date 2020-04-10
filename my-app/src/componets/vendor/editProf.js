import React, { Component } from "react";
import "../CSS/App.css";
export default class editProf extends Component {
  render() {
    return (
      <div className=" conainer-fluid proftop ">
        <div className="row m-5  hero-bkg-animated " style={{ color: "#fff" }}>
          {" "}
          <legend className="pt-4 title text-dark">
            <center>User profile</center>{" "}
          </legend>
          <div className="jumbotron prof col-md-6 col-sm-5 ">
            {" "}
            <div className="page-wrapper p-t-50 p-b-50">
              <div className="">
                <form className="form-horizontal" role="form">
                  <fieldset>
                    <div className="form-group">
                      <label className="control-label" for="Date Of Birth">
                        <h5>Name</h5>
                      </label>
                      <div className="">
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="fa fa-user fa-2x p-1"></i>
                          </div>
                          <input
                            id="Name (Full name)"
                            name="Name (Full name)"
                            type="text"
                            placeholder="Name (Full name)"
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label" for="Date Of Birth">
                        <h5>Date Of Birth</h5>
                      </label>
                      <div className="">
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="fa fa-birthday-cake fa-2x p-1"></i>
                          </div>
                          <input
                            id="Date Of Birth"
                            name="Date Of Birth"
                            type="date"
                            placeholder="Date Of Birth"
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className=" control-label" for="Gender">
                        <h5>Gender</h5>
                      </label>
                      <div className="row gender">
                        <label className="radio-inline col-md-3" for="Gender-0">
                          <input
                            type="radio"
                            name="Gender"
                            id="Gender-0"
                            value="1"
                            checked="checked"
                            className="col-md-3 checkmark"
                          />
                          Male
                        </label>
                        <label
                          className="radio-inline  col-md-3"
                          for="Gender-1"
                        >
                          <input
                            type="radio"
                            name="Gender"
                            id="Gender-1"
                            value="2"
                            className="col-md-3 checkmark"
                          />
                          Female
                        </label>
                        <label
                          className="radio-inline  col-md-3"
                          for="Gender-2"
                        >
                          <input
                            type="radio"
                            name="Gender"
                            id="Gender-2"
                            value="3"
                            className="col-md-3 checkmark "
                          />
                          Other
                        </label>
                      </div>
                    </div>

                    <div className=" form-group">
                      <label
                        className="control-label col-xs-12"
                        for="Permanent Address"
                      >
                        <h5>Permanent Address</h5>
                      </label>
                      <div className=" row">
                        <div className="col-lg-6  col-xs-4">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="District"
                            className="form-control input-md "
                          />
                        </div>

                        <div className="col-md-6 col-xs-4">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="Area"
                            className="form-control input-md "
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6  col-xs-5">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="Street"
                            className="form-control input-md "
                          />
                        </div>
                        <div className="col-md-6  col-xs-5">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="State"
                            className="form-control input-md "
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6  col-xs-5">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="Country"
                            className="form-control input-md "
                          />
                        </div>
                        <div className="col-md-6  col-xs-5">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="Pincode"
                            className="form-control input-md "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className=" control-label" for="Phone number ">
                        <h5>Phone number</h5>{" "}
                      </label>
                      <div className="">
                        <div className="input-group m-1 mb-3">
                          <div className="input-group-addon">
                            <i className="fa fa-phone fa-2x p-1"></i>
                          </div>
                          <input
                            id="Phone number "
                            name="Phone number "
                            type="text"
                            placeholder="Primary Phone number "
                            className="form-control input-md"
                          />
                        </div>
                        <div className="input-group othertop m-1">
                          <div className="input-group-addon">
                            <i
                              className="fa fa-mobile  ml-2 mr-2"
                              style={{ fontSize: 30 + "px" }}
                            ></i>
                          </div>
                          <input
                            id="Phone number "
                            name="Secondary Phone number "
                            type="text"
                            placeholder=" Secondary Phone number "
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      {/* <label className=" control-label" for="Email Address">
                        Email Address
                      </label> */}
                      <div className="">
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="fa fa-envelope-o fa-2x p-1"></i>
                          </div>
                          <input
                            id="Email Address"
                            name="Email Address"
                            type="text"
                            placeholder="Email Address"
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className=" control-label" for="Availability time">
                        <h5>Availability time</h5>
                      </label>
                      <div className="">
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className=" fa fa-clock-o fa-2x p-1"></i>
                          </div>
                          <input
                            id="Availability time"
                            name="Availability time"
                            type="text"
                            placeholder="Availability time"
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div className="form-group">
                      <label
                        className=" control-label"
                        for="Overview (max 200 words)"
                      >
                        <h5> Overview (max 200 words)</h5>
                      </label>
                      <div className="">
                        <textarea
                          className="form-control"
                          rows="10"
                          id="Overview (max 200 words)"
                          name="Overview (max 200 words)"
                        >
                          Overview
                        </textarea>
                      </div>
                    </div> */}
                    <div className="form-group row justify-content-center">
                      <div className="col-md-6 ">
                        <a href="#" className="btn btn-success">
                          <span className="glyphicon glyphicon-thumbs-up"></span>{" "}
                          Submit
                        </a>
                        <a href="#" className="btn btn-danger ml-2" value="">
                          <span className="glyphicon glyphicon-remove-sign"></span>{" "}
                          Clear
                        </a>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div className="jumbotron prof1 col-md-6 col-sm-6  ">
            <div className="">
              <div className="0">
                <div className="card cardH card-6">
                  <div className="card-heading">
                    <h2 className="">Change Password</h2>
                  </div>
                  <div className="card-body">
                    <form method="POST">
                      <div className="form-row">
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="full_name"
                            placeholder="User Id"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        {/* <div className="name">Password</div> */}
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="pswrd"
                              placeholder="Change password"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        {/* <div className="name">Re-Password</div> */}
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="repswrd"
                              placeholder="re-enter password"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn--radius-2 btn-warning"
                      type="submit"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-5">
              <div className="0">
                <div className="card cardH card-6">
                  <div className="card-heading">
                    <h2 className="">Other Details</h2>
                  </div>
                  <div className="card-body">
                    <form method="POST">
                      <div className="form-row">
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="full_name"
                            placeholder="Occupation"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        {/* <div className="name">Email address</div> */}
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type=""
                              name=""
                              placeholder="Hobbies"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        {/* <div className="name">Password</div> */}
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="pswrd"
                              placeholder="Change password"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        {/* <div className="name">Re-Password</div> */}
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="repswrd"
                              placeholder="re-enter password"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn--radius-2 btn-success"
                      type="submit"
                    >
                      Order Detail
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
