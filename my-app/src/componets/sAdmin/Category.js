import React, { Component } from "react";
import "../CSS/farm.css";
import Dropdown from "react-bootstrap/Dropdown";

export default class Category extends Component {
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
                    <h2 className="title text-dark">Add Category</h2>
                  </div>
                  <div className="card-body">
                    <form method="POST">
                      <div className="form-row frow">
                        <div className="name">Category Name</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="iname"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <a
                      className="btn btn-radius-2 btn-primary"
                      href="/category"
                      type="submit"
                    >
                      Add Category
                    </a>
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
