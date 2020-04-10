import React, { Component } from "react";

export default class sellerapplication extends Component {
  render() {
    return (
      <div className="content-wrapper ">
        <div className="row d-none" id="proBanner"></div>
        <div className="page-header mb-5">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home "></i>
            </span>{" "}
            Applications{" "}
          </h3>
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
      </div>
    );
  }
}
