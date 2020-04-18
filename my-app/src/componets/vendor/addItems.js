import React, { Component } from "react";
import "../CSS/farm.css";
import Dropdown from "react-bootstrap/Dropdown";

export default class addItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
    };
  }
  componentDidMount() {
    this.props.getCategory();
  }
  render() {
    return (
      <div className="container itmtop">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="jumbotron" id="login-second">
            <div className="page-wrapper p-t-50 p-b-50">
              <div className="wrapper wrapper--w900 ">
                <div className="card cardH card-6 ">
                  <div className="card-heading m-4">
                    <h2 className="title text-dark">Add Items</h2>
                  </div>
                  <div className="card-body">
                    <form method="POST">
                      <div className="form-row frow">
                        <div className="name">Item Name:</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="iname"
                          />
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Description:</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="desc"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Select Category:</div>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Category
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {this.props.category.map((category) => (
                              <Dropdown.Item key={category._id}>
                                {category.catname}
                              </Dropdown.Item>
                            ))}

                            {/* <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item> */}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Price in Rs:</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Quantity:</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Upload Images:</div>
                        <div className="value">
                          <div className="input-group js-input-file">
                            <input
                              className="input-file"
                              type="file"
                              name="file_doc"
                              id="file"
                              multiple
                            />

                            <label className="label-file" for="file">
                              Choose file
                            </label>
                            <span className="input-file__info">
                              No file chosen
                            </span>
                          </div>
                          <div className="label--desc">
                            Upload your Document/Id proff or any other relevant
                            file. Max file size 50 MB
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-radius-2 btn-primary"
                      type="submit"
                    >
                      Add
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
