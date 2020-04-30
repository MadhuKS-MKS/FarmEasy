import React, { Component } from "react";
import "../CSS/farm.css";

import axios from "axios";

export default class addItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      title: "",
      description: "",
      stock: "",
      rate: "",
      category: "",
      file: null,
    };
    this.onChange = this.onChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  componentDidMount() {
    this.props.getCategory();
  }
  // Input on change
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  // Dropdown change
  handleDropdownChange(e) {
    this.setState({ category: e.target.value });
  }
  // fileupload
  onChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData();
    // data.append("file", this.state.file, this.state.file.name);

    // console.log(data);
    const token = sessionStorage.getItem("token");
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "multipart/form-data",
    //   },
    // };
    try {
      // const res = await axios.post(
      //   `http://localhost:5000/api/v1/vendors/products/photo`,
      //   data,
      //   config
      // );
      // console.log(res.data.data);

      const products = {
        title: this.state.title,
        description: this.state.description,
        category: this.state.category,
        rate: this.state.rate,
        stock: this.state.stock,
        // photo: res.data.data,
      };
      const body = JSON.stringify(products);
      console.log(body);
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.post(
        `http://localhost:5000/api/v1/vendors/products`,
        body,
        config1
      );
      console.log(result.data.data);
      alert(`Product Addred ${result.data.data.title}`);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div className="container itmtop">
        {console.log(this.state)}
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
                    <form
                      onSubmit={this.onSubmit}
                      encType="multipart/form-data"
                    >
                      <div className="form-row frow">
                        <div className="name">Item Name:</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
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
                              name="description"
                              placeholder=""
                              value={this.state.description}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Select Category:</div>
                        {/* <Dropdown>
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
                          </Dropdown.Menu>
                        </Dropdown> */}
                        <select
                          id="dropdown "
                          className="btn bg-success"
                          onChange={this.handleDropdownChange}
                        >
                          <option value="no cat">None</option>
                          {this.props.category.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.catname}
                            </option>
                          ))}
                          {/* <option value="N/A">N/A</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option> */}
                        </select>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Price in Rs:</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="rate"
                              placeholder=""
                              value={this.state.rate}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Stock:</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="stock"
                              placeholder=""
                              value={this.state.stock}
                              onChange={this.onChange}
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
                              name="file"
                              id="file"
                              onChange={this.onChangeHandler}
                            />
                            <label className="label-file" htmlFor="file">
                              Choose file
                            </label>
                            {/* <span value={this.state.file}>No file chosen</span> */}
                          </div>
                          <div className="label--desc">
                            Upoload product Image. Max file size 50 MB
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <button
                          className="btn btn-radius-2 btn-primary"
                          type="submit"
                        >
                          Add
                        </button>
                      </div>
                    </form>
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
