import React, { Component } from "react";
import "../CSS/App.css";
import axios from "axios";

export default class cart extends Component {
  constructor(props) {
    super(props);

    // this.getUser = this.getUser;
    this.state = {
      email: "",
      password: "",
      items: [],
      user: "",
      isAuth: null,
    };
    // this.onLogout = this.onLogout.bind(this);
  }
  componentDidMount = async () => {
    this.setState({ user: this.props.location.state.user });
    // getting cart
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const result = await axios.get(
        `http://localhost:5000/api/v1/public/${this.props.location.state.user}/cart`,
        config
      );
      this.setState({
        items: result.data.data,
      });
      console.log(
        this.state.items
        //   .map((item) => {
        //   item;
        // })
      );
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  render() {
    console.log(this.state.user);

    return (
      <div className="container cartop">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: 50 + "%" }}>Product</th>
              <th style={{ width: 10 + "%" }}>Price</th>
              <th style={{ width: 8 + "%" }}>Quantity</th>
              <th style={{ width: 22 + "%" }} className="text-center">
                Subtotal
              </th>
              <th style={{ width: 10 + "%" }}></th>
            </tr>
          </thead>
          <tbody>
            {/* {this.state.items.map((item) => ( */}
            <tr>
              <td data-th="Product">
                <div className="row">
                  <div className="col-sm-2 hidden-xs">
                    <img src="" alt="..." className="img-responsive" />
                  </div>
                  <div className="col-md-9 " style={{ paddingLeft: 30 + "px" }}>
                    <h4 className="nomargin ">{}</h4>
                    <p>
                      Quis aute iure reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor
                      sit amet.
                    </p>
                  </div>
                </div>
              </td>
              <td data-th="Price">$1.99</td>
              <td data-th="Quantity">
                <input
                  type="number"
                  className="form-control text-center"
                  value="1"
                />
              </td>
              <td data-th="Subtotal" className="text-center">
                {}
              </td>
              <td className="actions" data-th="">
                <button className="btn btn-info btn-sm">
                  <i className="fa fa-refresh"></i>
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
          <tfoot>
            <tr className="visible-xs">
              <td className="text-center">
                <strong>Total 1.99</strong>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#" className="btn btn-warning">
                  <i className="fa fa-angle-left"></i> Continue Shopping
                </a>
              </td>
              <td colSpan="2" className="hidden-xs"></td>
              <td className="hidden-xs text-center">
                <strong>Total $1.99</strong>
              </td>
              <td>
                <a href="#" className="btn btn-success btn-block">
                  Checkout <i className="fa fa-angle-right"></i>
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
