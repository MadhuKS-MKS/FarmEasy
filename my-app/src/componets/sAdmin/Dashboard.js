import React, { Component } from "react";
import Category from "./Category";
import { Redirect, Link } from "react-router-dom";

export default class Dashboard extends Component {
  componentDidMount() {
    this.props.getorders();
    this.props.getvendors();
    this.props.getpublic();
    this.props.getCategory();
    this.props.getusers();
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
        {/* Vendors List */}
        <div className="row" id="vendor">
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
                        <th>Action</th>
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
                          <td className="actions" data-th="">
                            <button className="btn btn-info btn-sm">
                              <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn btn-danger btn-sm">
                              <i className="fa fa-trash-o"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Vendor List */}
        {/* User List */}
        <div className="row" id="vendor">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Users</h4>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> Name </th>
                        <th> Phone </th>
                        <th> email </th>

                        <th> Address </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.vendors.map((user) => (
                        <tr key={user._id}>
                          <td>
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                              className="mr-2"
                              alt=""
                              width="40px"
                            />{" "}
                            {user.name}
                          </td>
                          <td>{user.phone} </td>
                          <td>
                            <label
                              className="badge text-bg"
                              style={{ fontSize: 14 + "px" }}
                            >
                              {user.email}
                            </label>
                          </td>

                          <td> {user.address} </td>
                          <td className="actions" data-th="">
                            <button className="btn btn-info btn-sm">
                              <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn btn-danger btn-sm">
                              <i className="fa fa-trash-o"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Vendor List */}
        {/* Order List */}
        <div className="row mt-5" id="order">
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
                        <th> Status </th>
                        <th>Action</th>
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
                          <td className="actions" data-th="">
                            <button className="btn btn-info btn-sm ">
                              <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn btn-danger btn-sm ml-4">
                              <i className="fa fa-trash-o"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Order List */}
        {/* Category List */}
        <div className="row mt-5" id="category">
          <div className="col-6 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Category</h4>{" "}
                <div className="pull-right mb-2">
                  <Link to="/category" className="btn btn-danger btn-sm">
                    <i className="fa fa-plus fa-1x">Add Category</i>
                  </Link>
                </div>
                <div className="table-responsive ">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> Name </th>

                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.category.map((category) => (
                        <tr key={category._id}>
                          <td>{category.catname} </td>

                          <td className="actions" data-th="">
                            <button className="btn btn-info btn-sm mr-4">
                              <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn btn-danger btn-sm">
                              <i className="fa fa-trash-o"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of category list */}
      </div>
    );
  }
}
