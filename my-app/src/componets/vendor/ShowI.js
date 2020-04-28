import React, { Component } from "react";
import "../CSS/farm.css";
import axios from "axios";

export default class ShowI extends Component {
  state = {
    products: [],
  };
  componentDidMount = () => {
    this.getproducts();
    console.log(this.props.location.state.user);
  };
  getproducts = async () => {
    const token = sessionStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/vendors/products/product/${this.props.location.state.user}`,
        config
      );
      this.setState({
        products: res.data.data,
      });
      console.log(res.data.data);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  onDeleteUser = async (user, e) => {
    e.preventDefault();
    // console.log(user);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.delete(
        `http://localhost:5000/api/v1/vendors/products/${user}`,
        config
      );

      alert("User Deleted");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div>
        {console.log()}
        <section>
          <div id="portfolio">
            <div className="container showtop  login-second ">
              <div className="page-title text-center">
                <h1>Products</h1>

                <hr className="pg-titl-bdr-btm" />
              </div>
              <div className="row">
                <div className="col-lg-12 ">{/* categotize */}</div>
              </div>

              <div className="row" id="" style={{ opacity: 1 }}>
                {/*  */}
                <div className="container pt-4">
                  <div className=" tabletrans ">
                    <div className="well">
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <div className="pull-right">
                            <a
                              href="/vendor/addItems"
                              className="btn btn-info btn-sm p-2"
                            >
                              Add Item
                            </a>
                          </div>
                        </div>

                        <div className="pull-left">
                          <a
                            href="/vendor/Home"
                            className="btn btn-info btn-sm p-2"
                          >
                            Back to Home
                          </a>
                        </div>
                      </div>
                      <table className="table table-hover">
                        <thead>
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
                        </thead>
                        <tbody>
                          {this.state.products.map((product) => (
                            <tr key={product._id}>
                              <td className="tbld">
                                <img
                                  src={`${product.photo}`}
                                  alt=""
                                  width="150px"
                                  height="100px"
                                ></img>
                              </td>
                              <td className="tbld">{product.title}</td>
                              <td className="tbld">{product.description}</td>
                              <td className="tbld">{product.stock}</td>

                              <td className="d-flex justify-content-center tbld">
                                <div className="btn-group ">
                                  <a
                                    href=""
                                    className="btn btn-danger btn-md mr-5"
                                    value={product._id}
                                    onClick={(e) =>
                                      this.onDeleteUser(product._id, e)
                                    }
                                  >
                                    <i className="fa fa-trash-o"></i>
                                  </a>

                                  {/* <a href="" className="btn btn-info btn-md">
                                    <i className="fa fa-edit"></i>
                                  </a> */}
                                </div>
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
          </div>
        </section>
      </div>
    );
  }
}
