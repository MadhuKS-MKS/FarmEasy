import React, { Component } from "react";
import "../CSS/farm.css";

export default class ShowI extends Component {
  render() {
    return (
      <div>
        <section>
          <div id="portfolio">
            <div class="container showtop  login-second ">
              <div class="page-title text-center">
                <h1>Products</h1>

                <hr class="pg-titl-bdr-btm" />
              </div>
              <div class="row">
                <div class="col-lg-12 ">{/* categotize */}</div>
              </div>

              <div class="row" id="" style={{ opacity: 1 }}>
                {/*  */}
                <div class="container pt-4">
                  <div class=" tabletrans ">
                    <div class="well">
                      <div class="row mb-5">
                        <div class="col-md-6">
                          <div class="pull-right">
                            <a
                              href="/farmer/addItems"
                              class="btn btn-info btn-sm p-2"
                            >
                              Add Item
                            </a>
                          </div>
                        </div>

                        <div class="pull-left">
                          <a href="/FHome" class="btn btn-info btn-sm p-2">
                            Back to Home
                          </a>
                        </div>
                      </div>
                      <table class="table table-hover">
                        <tr>
                          <th>
                            <label>Img</label>
                          </th>
                          <th>
                            {" "}
                            <label>Name</label>
                          </th>
                          <th>
                            {" "}
                            <label>Price</label>
                          </th>
                          <th>
                            {" "}
                            <label>Stock</label>
                          </th>

                          <th>
                            {" "}
                            <label className="d-flex justify-content-center">
                              Actions
                            </label>
                          </th>
                        </tr>

                        <tr>
                          <td className="tbld">
                            <img
                              src="http://starkovtattoo.spb.ru/images/200/DSC100224440.png"
                              alt=""
                              width="150px"
                              height="100px"
                            ></img>
                          </td>
                          <td className="tbld">2</td>
                          <td className="tbld">3</td>
                          <td className="tbld">g</td>

                          <td className="d-flex justify-content-center tbld">
                            <div className="btn-group ">
                              <a href="" class="btn btn-danger btn-md mr-5">
                                <i class="fa fa-trash-o"></i>
                              </a>

                              <a href="" class="btn btn-info btn-md">
                                <i class="fa fa-edit"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
