import React, { Component } from "react";
import "../CSS/farm.css";
import axios from "axios";

import Dropdown from "react-bootstrap/Dropdown";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { catname: "" };
  }

  onChangeHandler = (e) => {
    this.setState({
      catname: e.target.value,
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post("http://localhost:5000/api/v1/category/", config);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div
        className="modal m-5"
        id="modalLoginForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                Add Category{" "}
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <form onSubmit={this.onSubmit}>
              <div className="modal-body mx-3">
                <div className="md-form mb-4">
                  <i className="fa fa-edit prefix grey-text mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="defaultForm-text"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="catname"
                    id="defaultForm-text"
                    className="form-control validate"
                    onChange={this.onChangeHandler}
                    value={this.state.catname}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
