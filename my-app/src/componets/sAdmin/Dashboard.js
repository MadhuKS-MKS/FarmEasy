import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
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
                  Total Sold Items{" "}
                  <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                {/* <h2 className="mb-5">777</h2>
                        <h6 className="card-text"></h6> */}
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
                {/* <h2 className="mb-5">45,6334</h2>
                        <h6 className="card-text">Decreased by 10%</h6> */}
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
                {/* <h2 className="mb-5">95,5741</h2>
                        <h6 className="card-text">Increased by 5%</h6> */}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Request</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> Assignee </th>
                        <th> Profession </th>
                        <th> Status </th>

                        <th> Doccument ID </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                            className="mr-2"
                            alt=""
                            width="40px"
                          />{" "}
                          David Grey{" "}
                        </td>
                        <td> Food </td>
                        <td>
                          <label className="badge badge-gradient-success">
                            DONE
                          </label>
                        </td>

                        <td> WD-12345 </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                            className="mr-2"
                            alt=""
                            width="40px"
                          />{" "}
                          Stella Johnson{" "}
                        </td>
                        <td> Grossory </td>
                        <td>
                          <label className="badge badge-gradient-warning">
                            PROGRESS
                          </label>
                        </td>
                        <td> WD-12346 </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                            className="mr-2"
                            alt=""
                            width="40px"
                          />{" "}
                          Marina Michel{" "}
                        </td>
                        <td> Sweets </td>
                        <td>
                          <label className="badge badge-gradient-info">
                            ON HOLD
                          </label>
                        </td>
                        <td> WD-12347 </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                            className="mr-2"
                            alt=""
                            width="40px"
                          />{" "}
                          John Doe{" "}
                        </td>
                        <td> Other </td>
                        <td>
                          <label className="badge badge-gradient-danger">
                            REJECTED
                          </label>
                        </td>
                        <td> WD-12348 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Project Status</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Due Date </th>
                        <th> Progress </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> Herman Beck </td>
                        <td> May 15, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-success"
                              role="progressbar"
                              style={{ width: 25 + "%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Messsy Adam </td>
                        <td> Jul 01, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: 75 + "%" }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> John Richards </td>
                        <td> Apr 12, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-warning"
                              role="progressbar"
                              style={{ width: 90 + "%" }}
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
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
                          <input
                            className="checkbox"
                            type="checkbox"
                            checked=""
                          />{" "}
                          Call John <i className="input-helper"></i>
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
                          <input
                            className="checkbox"
                            type="checkbox"
                            checked=""
                          />{" "}
                          Prepare for presentation{" "}
                          <i className="input-helper"></i>
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
          </div>
        </div>
      </div>
    );
  }
}
