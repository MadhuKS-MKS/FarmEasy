import React, { Component } from "react";

export default class verifdsellr extends Component {
  render() {
    return (
      <div class="content-wrapper ">
        <div class="row d-none" id="proBanner"></div>
        <div class="page-header mb-5">
          <h3 class="page-title">
            <span class="page-title-icon bg-gradient-primary text-white mr-2">
              <i class="mdi mdi-home "></i>
            </span>{" "}
            Varified User{" "}
          </h3>
        </div>

        <div class="row">
          <div class="col-12 grid-margin">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Recent Request</h4>
                <div class="table-responsive">
                  <table class="table">
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
                            class="mr-2"
                            alt=""
                            width="40px"
                          />{" "}
                          David Grey{" "}
                        </td>
                        <td> Food </td>
                        <td>
                          <label class="badge badge-gradient-success">
                            DONE
                          </label>
                        </td>

                        <td> WD-12345 </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                            class="mr-2"
                            alt=""
                            width="40px"
                          />{" "}
                          Stella Johnson{" "}
                        </td>
                        <td> Grossory </td>
                        <td>
                          <label class="badge badge-gradient-warning">
                            PROGRESS
                          </label>
                        </td>
                        <td> WD-12346 </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                            class="mr-2"
                            alt=""
                            width="40px"
                          />{" "}
                          Marina Michel{" "}
                        </td>
                        <td> Sweets </td>
                        <td>
                          <label class="badge badge-gradient-info">
                            ON HOLD
                          </label>
                        </td>
                        <td> WD-12347 </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
                            class="mr-2"
                            alt=""
                            width="40px"
                          />{" "}
                          John Doe{" "}
                        </td>
                        <td> Other </td>
                        <td>
                          <label class="badge badge-gradient-danger">
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
