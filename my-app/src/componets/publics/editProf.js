import React, { Component, history } from "react";
import "../CSS/App.css";
import axios from "axios";
export default class editProf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      profile: {},
      name: null,
      dob: null,
      address: null,
      phone: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      auth: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount = async () => {
    this.setState({ id: this.props.match.params.id });
    // getting user
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/public/${this.state.id}`,
        config
      );
      // console.log(res);
      this.setState({
        profile: res.data.data[0],
      });
      // console.log(this.state.profile);
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  // Input on change
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // update details
  onSubmitDeatils = async (e) => {
    // e.preventDefault();
    // const details = {
    //   name: this.state,
    // };
    // console.log(data);
    // const token = sessionStorage.getItem("token");
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    // };
    // try {
    // const res = await axios.put(
    //   `http://localhost:5000/api/v1/public/${this.state.profile._id}/photo`,
    //   data,
    //   config
    // );
    // this.setState({
    //   file: res.data.data[0],
    // });
    // console.log(res);
    //   alert("Profile Updated");
    // } catch (err) {
    //   console.log("Can't load the items");
    // }
  };
  OnSubmitPassword = async (e) => {
    e.preventDefault();
    const password = {
      currentPassword: this.state.currentPassword,
      newPassword: this.state.newPassword,
    };
    const body = JSON.stringify(password);
    console.log(body);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.put(
        `http://localhost:5000/api/v1/auth/updatepassword`,
        body,
        config
      );

      alert(`Passoword Changed Updated `);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    console.log(this.state);
    const profile = this.state.profile;
    return (
      <div className="proftop profile">
        <div className="container row">
          {" "}
          <legend className="pt-4 title text-light">
            <center>User profile</center>{" "}
          </legend>
          <div
            className="col-md-7"
            // style={{ background: "transperent" }}
          >
            {" "}
            <div className=" p-t-50 p-b-50">
              <div className=" jumbotron text-black">
                <form
                  className="form-horizontal"
                  onSubmit={this.onSubmitDeatils}
                >
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
                            id="Name"
                            name="name"
                            type="text"
                            placeholder={profile.name}
                            className="form-control input-md"
                            value={this.state.name}
                            onChange={this.onChange}
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
                            name="dob"
                            type="date"
                            placeholder={profile.dob}
                            value={this.state.dob}
                            onChange={this.onChange}
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div className=" form-group">
                      <label
                        className="control-label col-xs-12"
                        for="Permanent Address"
                      >
                        <h5>Permanent Address</h5>
                      </label>

                      <div className="row mt-2">
                        <div className="col-md-12  col-xs-12">
                          <input
                            id="Permanent Address"
                            name="address"
                            type="text"
                            placeholder={profile.city}
                            value={this.state.address}
                            onChange={this.onChange}
                            className="form-control input-md "
                          />
                        </div>
                      </div>
                      {/* <div className="row mt-2">
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
                      </div> */}
                    </div>

                    <div className="form-group">
                      <label className=" control-label" for="Phone number ">
                        <h5>Contact Detail</h5>{" "}
                      </label>
                      <div className="">
                        <div className="input-group m-1 mb-3">
                          <div className="input-group-addon">
                            <i className="fa fa-phone fa-2x p-1"></i>
                          </div>
                          <input
                            id="Phone number "
                            name="phone"
                            type="text"
                            placeholder={profile.phone}
                            value={this.state.phone}
                            onChange={this.onChange}
                            className="form-control input-md"
                          />
                        </div>
                        {/* <div className="input-group othertop m-1">
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
                        </div> */}
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
                            name="email"
                            type="text"
                            placeholder={profile.email}
                            value={this.state.email}
                            onChange={this.onChange}
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="form-group">
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
                    </div> */}

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
                        <a href="#" className="btn btn-success" type="submit">
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
          <div className="jumbotron prof text-center col-md-5">
            {" "}
            <div className="">
              <div className="0">
                <div className="card cardH  ">
                  <div className="card-heading">
                    <h2 className="text-dark">Change Password</h2>
                  </div>
                  <div className="card-body">
                    <form role="form" onSubmit={this.OnSubmitPassword}>
                      <div className="form-row">
                        <div className="value col-md-12">
                          <input
                            className="input--style-6 "
                            type="id"
                            name="text"
                            // placeholder={profile.id}
                            value={profile.id}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        {/* <div className="name">Password</div> */}
                        <div className="value col-md-12">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="passowrd"
                              name="currentPassword"
                              value={this.state.currentPassword}
                              onChange={this.onChange}
                              placeholder="Current Password"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        {/* <div className="name">Re-Password</div> */}
                        <div className="value col-md-12">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="password"
                              name="newPassword"
                              value={this.state.newPassword}
                              onChange={this.onChange}
                              placeholder="New Password"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <button
                          className="btn btn--radius-2 btn-warning"
                          type="submit"
                        >
                          Change
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
      // </div>
    );
  }
}
