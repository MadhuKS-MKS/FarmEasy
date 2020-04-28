import React, { Component } from "react";
import axios from "axios";
export default class orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount = async () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/orders/vendor`,
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
  onDeleteOrder = async (id, e) => {
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
      await axios.delete(`http://localhost:5000/api/v1/order/${id}`, config);

      alert("Order Deleted");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div className="container-fluid order ordtop">
        <div className=" jumbotron " style={{ background: "none" }}>
          <h1 className="display-3">Order List</h1>

          <hr className="my-2" />

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th> Order No </th>
                  <th> Item Name </th>
                  <th> Buyyer </th>
                  <th> Qty </th>
                  <th> Stock </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((res, index) => (
                  <tr>
                    <td>{index + 1} </td>
                    <td>{res.title} </td>
                    <td>{res.public.name} </td>
                    <td>{res.qty} </td>
                    <td>{res.rate} </td>

                    <td className="actions" data-th="">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) => this.onDeleteOrder(res._id, e)}
                      >
                        <i className="fa fa-trash-o"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
