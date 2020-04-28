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
        `http://localhost:5000/api/v1/public/cart`,
        config
      );
      this.setState({
        items: result.data.data,
      });
      console.log(this.state.items);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  onDeleteUser = async (id, e) => {
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
        `http://localhost:5000/api/v1/public/cart/${id}`,
        config
      );

      alert("Item Deleted");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  onSubmitCart = async (e) => {
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
      await axios.put(
        `http://localhost:5000/api/v1/public/cart/orders/order`,
        config
      );

      alert("Item Sent");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  onSubmitSingle = async (id, e) => {
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
      await axios.put(
        `http://localhost:5000/api/v1/public/cart/orders/${id}`,
        config
      );

      alert("Item Sent");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    console.log(this.state.user);

    return (
      <div className="container cartop ">
        <div className="jumbotron m-5 bg-transperent">
          <h2 className="text-center">Cart</h2>
          <table id="cart" className="table table-hover table-condensed">
            <thead>
              <tr>
                <th style={{ width: 30 + "%" }}>Product</th>
                <th style={{ width: 5 + "%" }}>Price</th>
                <th style={{ width: 8 + "%" }}>Quantity</th>
                <th style={{ width: 5 + "%" }}>Status</th>
                <th style={{ width: 5 + "%" }} className="text-center">
                  Subtotal
                </th>
                <th style={{ width: 20 + "%" }}></th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <tr key={item._id}>
                  <td data-th="Product">
                    <div className="row">
                      <div className="col-sm-4 ">
                        <img
                          src={`${item.photo}`}
                          alt="..."
                          className="img-responsive"
                          style={{ width: 100 + "%" }}
                        />
                      </div>
                      <div
                        className="col-md-8 "
                        style={{ paddingLeft: 30 + "px" }}
                      >
                        <h4 className="nomargin ">{item.title}</h4>
                        {/* <p>
                          Quis aute iure reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                          dolor sit amet.
                        </p> */}
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">${item.rate}</td>
                  <td data-th="Quantity">
                    <input
                      type="text"
                      className="form-control text-center"
                      value={item.qty}
                      readOnly
                    />
                  </td>
                  <td>{item.status}</td>
                  <td data-th="Subtotal" className="text-center">
                    {item.rate * item.qty}
                  </td>
                  <td className="actions" data-th="">
                    <a
                      href=""
                      className="btn btn-danger btn-md mr-5"
                      value={item._id}
                      onClick={(e) => this.onDeleteUser(item._id, e)}
                    >
                      <i className="fa fa-trash-o"></i>
                    </a>
                    <a
                      className="btn btn-info btn-sm "
                      onClick={(e) => this.onSubmitSingle(item._id, e)}
                    >
                      <i className="fa fa-cart">Order</i>
                    </a>
                  </td>
                </tr>
              ))}
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
                  <a
                    href="#"
                    className="btn btn-success btn-block"
                    onClick={(e) => this.onSubmitCart(e)}
                  >
                    Checkout
                    <i className="fa fa-angle-right"></i>
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
