import React, { Component } from "react";
import "../CSS/App.css";
export default class editProf extends Component {
  render() {
    return (
      <div className="proftop profile">
        <div className="container">
          {" "}
          <legend className="pt-4 title text-light">
            <center>User profile</center>{" "}
          </legend>
          <div
            className=""
            // style={{ background: "transperent" }}
          >
            {" "}
            <div class=" p-t-50 p-b-50">
              <div class=" jumbotron text-black">
                <form class="form-horizontal" role="form">
                  <fieldset>
                    <div class="form-group">
                      <label class="control-label" for="Date Of Birth">
                        <h5>Name</h5>
                      </label>
                      <div class="">
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-user fa-2x p-1"></i>
                          </div>
                          <input
                            id="Name (Full name)"
                            name="Name (Full name)"
                            type="text"
                            placeholder="Name (Full name)"
                            class="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label" for="Date Of Birth">
                        <h5>Date Of Birth</h5>
                      </label>
                      <div class="">
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-birthday-cake fa-2x p-1"></i>
                          </div>
                          <input
                            id="Date Of Birth"
                            name="Date Of Birth"
                            type="date"
                            placeholder="Date Of Birth"
                            class="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class=" control-label" for="Gender">
                        <h5>Gender</h5>
                      </label>
                      <div class="row gender">
                        <label class="radio-inline col-md-3" for="Gender-0">
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
                        <label class="radio-inline  col-md-3" for="Gender-1">
                          <input
                            type="radio"
                            name="Gender"
                            id="Gender-1"
                            value="2"
                            className="col-md-3 checkmark"
                          />
                          Female
                        </label>
                        <label class="radio-inline  col-md-3" for="Gender-2">
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

                    <div class=" form-group">
                      <label
                        class="control-label col-xs-12"
                        for="Permanent Address"
                      >
                        <h5>Permanent Address</h5>
                      </label>
                      {/* <div class=" row">
                        <div class="col-lg-6  col-xs-4">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="District"
                            class="form-control input-md "
                          />
                        </div>

                        <div class="col-md-6 col-xs-4">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="Area"
                            class="form-control input-md "
                          />
                        </div>
                      </div> */}
                      <div className="row mt-2">
                        {/* <div class="col-md-6  col-xs-5">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="Street"
                            class="form-control input-md "
                          />
                        </div> */}
                        <div class="col-md-12  col-xs-12">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="Address"
                            class="form-control input-md "
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div class="col-md-6  col-xs-5">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="Country"
                            class="form-control input-md "
                          />
                        </div>
                        <div class="col-md-6  col-xs-5">
                          <input
                            id="Permanent Address"
                            name="Permanent Address"
                            type="text"
                            placeholder="Pincode"
                            class="form-control input-md "
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class=" control-label" for="Phone number ">
                        <h5>Contact Detail</h5>{" "}
                      </label>
                      <div class="">
                        <div class="input-group m-1 mb-3">
                          <div class="input-group-addon">
                            <i class="fa fa-phone fa-2x p-1"></i>
                          </div>
                          <input
                            id="Phone number "
                            name="Phone number "
                            type="text"
                            placeholder="Primary Phone number "
                            class="form-control input-md"
                          />
                        </div>
                        {/* <div class="input-group othertop m-1">
                          <div class="input-group-addon">
                            <i
                              class="fa fa-mobile  ml-2 mr-2"
                              style={{ fontSize: 30 + "px" }}
                            ></i>
                          </div>
                          <input
                            id="Phone number "
                            name="Secondary Phone number "
                            type="text"
                            placeholder=" Secondary Phone number "
                            class="form-control input-md"
                          />
                        </div> */}
                      </div>
                    </div>
                    <div class="form-group">
                      {/* <label class=" control-label" for="Email Address">
                        Email Address
                      </label> */}
                      <div class="">
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-envelope-o fa-2x p-1"></i>
                          </div>
                          <input
                            id="Email Address"
                            name="Email Address"
                            type="text"
                            placeholder="Email Address"
                            class="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class=" control-label" for="Availability time">
                        <h5>Availability time</h5>
                      </label>
                      <div class="">
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class=" fa fa-clock-o fa-2x p-1"></i>
                          </div>
                          <input
                            id="Availability time"
                            name="Availability time"
                            type="text"
                            placeholder="Availability time"
                            class="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div class="form-group">
                      <label
                        class=" control-label"
                        for="Overview (max 200 words)"
                      >
                        <h5> Overview (max 200 words)</h5>
                      </label>
                      <div class="">
                        <textarea
                          class="form-control"
                          rows="10"
                          id="Overview (max 200 words)"
                          name="Overview (max 200 words)"
                        >
                          Overview
                        </textarea>
                      </div>
                    </div> */}
                    <div class="form-group row justify-content-center">
                      <div class="col-md-6 ">
                        <a href="#" class="btn btn-success">
                          <span class="glyphicon glyphicon-thumbs-up"></span>{" "}
                          Submit
                        </a>
                        <a href="#" class="btn btn-danger ml-2" value="">
                          <span class="glyphicon glyphicon-remove-sign"></span>{" "}
                          Clear
                        </a>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div className="jumbotron prof text-center ">
            {" "}
            <div class="">
              <div class="0">
                <div class="card cardH card-6 ">
                  <div class="card-heading">
                    <h2 class="text-dark">Change Password</h2>
                  </div>
                  <div class="card-body">
                    <form method="POST">
                      <div class="form-row">
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                            placeholder="User Id"
                          />
                        </div>
                      </div>

                      <div class="form-row">
                        {/* <div class="name">Password</div> */}
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="pswrd"
                              placeholder="Change password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        {/* <div class="name">Re-Password</div> */}
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="repswrd"
                              placeholder="re-enter password"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn--radius-2 btn-warning" type="submit">
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class=" mt-5">
              <div class="0">
                <div class="card cardH card-6">
                  <div class="card-heading">
                    <h2 class="text-dark">Payment Details</h2>
                  </div>
                  <div class="card-body">
                    <form method="POST">
                      <div class="form-row">
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                            placeholder="Account Number"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                         <div class="name">Email address</div> 
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type=""
                              name=""
                              placeholder="Interest"
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
                              type="text"
                              name="pswrd"
                              placeholder="Change password"
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
                              type="text"
                              name="repswrd"
                              placeholder="re-enter password"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn--radius-2 btn-success" type="submit">
                      Order Detail
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
        //{" "}
      </div>
      // </div>
    );
  }
}
