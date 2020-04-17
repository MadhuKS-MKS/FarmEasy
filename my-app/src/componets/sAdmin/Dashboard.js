import React, { Component } from "react";

export default class Dashboard extends Component {
  componentDidMount() {
    this.props.getorders();
    this.props.getvendors();
    this.props.getpublic();
  }

  render() {
    const orders = this.props.orders;
    const vendors = this.props.vendors;
    const publics = this.props.publics;

    console.log(this.props);
    return (
      <div className="content-wrapper ">
        <div className="row d-none" id="proBanner"></div>
        <div className="page-header mb-5">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home "></i>
            </span>{" "}
            Dashboard{" "}
          </h3>
        </div>
        <div className="row mb-5">
          <div className="col-md-4 stretch-card grid-margin ">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                {/* <img
                          src="assets/images/dashboard/circle.svg"
                          className="card-img-absolute"
                          alt="circle-image"
                        /> */}
                <h4 className="font-weight-normal mb-3">
                  Total Sold Items
                  <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">{orders.length}</h2>
                <h6 className="card-text"></h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                {/* <img
                          src="assets/images/dashboard/circle.svg"
                          className="card-img-absolute"
                          alt="circle-image"
                        /> */}
                <h4 className="font-weight-normal mb-3">
                  Total Sellers
                  <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">{vendors.length}</h2>
                <h6 className="card-text"></h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-primary card-img-holder text-white">
              <div className="card-body">
                {/* <img
                          src="assets/images/dashboard/circle.svg"
                          className="card-img-absolute"
                          alt="circle-image"
                        /> */}
                <h4 className="font-weight-normal mb-3">
                  Total Public Users
                  <i className="mdi mdi-diamond mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">{publics.length}</h2>
                <h6 className="card-text"></h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">vendors</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> Name </th>
                        <th> Phone </th>
                        <th> email </th>

                        <th> Address </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.vendors.map((vendor) => (
                        <tr key={vendor._id}>
                          <td>
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                              className="mr-2"
                              alt=""
                              width="40px"
                            />{" "}
                            {vendor.name}
                          </td>
                          <td>{vendor.phone} </td>
                          <td>
                            <label
                              className="badge text-bg"
                              style={{ fontSize: 14 + "px" }}
                            >
                              {vendor.email}
                            </label>
                          </td>

                          <td> {vendor.address} </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Order List</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Qty </th>
                        <th>Price</th>
                        <th> Status </th>.
                      </tr>
                    </thead>

                    <tbody>
                      {this.props.orders.map((order) => (
                        <tr key={order._id}>
                          <td> # </td>
                          <td>
                            {" "}
                            <div className="card">
                              {order.title}
                              <div className="photo">
                                <img src={order.photo} width="50%" />
                              </div>
                            </div>{" "}
                          </td>
                          <td> {order.qty} </td>
                          <td> {order.rate} </td>
                          <td>
                            <div className="">
                              <div
                                className="progress-bar bg-gradient-success"
                                role="progressbar"
                                // style={{ width: 25 + "%" }}
                                // aria-valuenow="100"
                                // aria-valuemin="0"
                                // aria-valuemax="100"
                              >
                                {" "}
                                {order.status}
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {/*                       
                      <tr>
                        <td> 4 </td>
                        <td> Peter Meggik </td>
                        <td> May 15, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-primary"
                              role="progressbar"
                              style={{ width: 50 + "%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> Edward </td>
                        <td> May 03, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: 35 + "%" }}
                              aria-valuenow="35"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> Ronald </td>
                        <td> Jun 05, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: 65 + "%" }}
                              aria-valuenow="65"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-white">Todo</h4>
                <div className="add-items d-flex">
                  <input
                    type="text"
                    className="form-control todo-list-input"
                    placeholder="What do you need to do today?"
                  />
                  <button
                    className="add btn btn-gradient-primary font-weight-bold todo-list-add-btn"
                    id="add-task"
                  >
                    Add
                  </button>
                </div>
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list todo-list-custom">
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" /> Meeting
                          with Alisa <i className="input-helper"></i>
                        </label>
                      </div>
                      <i className="remove mdi mdi-close-circle-outline"></i>
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" /> Call
                          John <i className="input-helper"></i>
                        </label>
                      </div>
                      <i className="remove mdi mdi-close-circle-outline"></i>
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" /> Create
                          invoice <i className="input-helper"></i>
                        </label>
                      </div>
                      <i className="remove mdi mdi-close-circle-outline"></i>
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" /> Print
                          Statements <i className="input-helper"></i>
                        </label>
                      </div>
                      <i className="remove mdi mdi-close-circle-outline"></i>
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" /> Prepare
                          for presentation <i className="input-helper"></i>
                        </label>
                      </div>
                      <i className="remove mdi mdi-close-circle-outline"></i>
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" /> Pick up
                          kids from school <i className="input-helper"></i>
                        </label>
                      </div>
                      <i className="remove mdi mdi-close-circle-outline"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}
