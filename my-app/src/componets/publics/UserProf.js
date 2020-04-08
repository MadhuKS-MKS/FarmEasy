import React, { Component } from "react";

export default class UserProf extends Component {
  render() {
    return (
      <div>
        <div class=" mt-5 pt-5 profile">
          <article>
            <div class="">
              {/* <h1 class="text-center">User Profile</h1>
              <p class="lead">Jumbo helper text</p> */}
              <div class="box-body row">
                <div className="col-lg-6">
                  <div align="center">
                    <a
                      href="#myModal"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      <div class="well form">
                        <img
                          src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                          class="img-responsive"
                          id="profile-image1"
                        />
                      </div>
                    </a>{" "}
                    <div>click img to change profile image</div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <h4 style={{ color: "pink" }}>Maddy </h4>
                  <div className="">
                    <label name="uid">User Id</label>
                  </div>
                  <div className="">
                    <label name="dob">Date Of Birth</label>
                  </div>
                  <div className="">
                    <label name="email">Email</label>
                  </div>
                  {/* <div className="row">
                    <div className="col-md-5">
                      <label name="state">State</label>
                    </div>
                    <div className="col-md-5">
                      <label name="country">Country</label>
                    </div>
                  </div> */}
                </div>
              </div>
              <hr class="my-2" />
              {/* <div className="d-flex justify-content-end showdtl ">
                <a
                  value="More"
                  type="text"
                  name="More"
                  className=" btn"
                  style={{ width: 10 + "%" }}
                >
                  More
                </a>
              </div> */}

              <div className="ex1  ">
                <label for="item-1" className="toggle btn   row">
                  More
                </label>
                <input type="checkbox" name="one" id="item-1" />
                {/* </div> */}
                <div className=" hide ">
                  <div class="card-body row" id="">
                    <div className="col-md-3">
                      <h4 class="card-title ">Address</h4>
                      <div className="col-md-4">
                        <label name="state">Street</label>
                      </div>
                      <div className="col-md-4">
                        <label name="country">Area</label>
                      </div>
                      <div className="col-md-4">
                        <label name="country">Distric</label>
                      </div>
                      <div className="col-md-4">
                        <label name="state">State</label>
                      </div>
                      <div className="col-md-4">
                        <label name="country">Country</label>
                      </div>
                    </div>
                    <hr></hr>

                    <div className="col-md-3">
                      <h4>Contact</h4>
                      <div className="col-md-4">
                        <label name="phone">Phone</label>
                      </div>
                      <div className="col-md-4">
                        <label name="mob">Mobile</label>
                      </div>
                    </div>
                    <hr></hr>

                    <div className="col-md-3">
                      <h4>Available Time For delivery</h4>
                      <div className="col-md-4">
                        <label name="dtime">Time</label>
                      </div>
                    </div>
                    <hr></hr>

                    <div className="col-md-3">
                      <h4>Other Note</h4>
                      <div className="col-md-4">
                        <label name="snote">Short Note</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-md-6">
                  <div class=" text-left ">
                    <div class="card-body">
                      <h4 class="card-title">About</h4>
                      <p class="card-text">city</p>
                      <p class="card-text">Streat</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="">
              <div className="d-flex justify-content-end">
                <a
                  type="button"
                  value="Edit"
                  name="Edit"
                  className="btn btn-warning "
                  style={{ width: 10 + "%" }}
                  href="/user/editprofile"
                >
                  Edit
                </a>
              </div>
            </div>
          </article>

          <div id="myModal" class="modal show" role="dialog">
            <div class="modal-dialog modal-sm">
              <div class="modal-content  text-dark">
                <div class="modal-header">
                  <h4 class="modal-title">Change Profile</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <form
                    name=""
                    method="post"
                    action="change_pic.php"
                    enctype="multipart/form-data"
                  >
                    <div class="form-group">
                      <label>Upload Image:</label>
                      <input
                        type="file"
                        name="photo"
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>User:</label>
                      <input
                        type="text"
                        name="uname"
                        class="form-control"
                        value=""
                        required
                      />
                    </div>

                    <div class="modal-footer">
                      <div class="btn-group">
                        <button
                          type="submit"
                          name="submit"
                          class="btn btn-primary"
                        >
                          Upload
                        </button>
                        <button
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
