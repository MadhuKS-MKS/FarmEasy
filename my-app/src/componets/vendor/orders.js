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
        ` http://localhost:5000/api/v1/orders/orders/${this.props.location.state.user}`,
        config
      );
      this.setState({
        products: res.data.data,
      });
      console.log(res);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  onDeleteCategory = async (category, e) => {
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
      await axios.get(`http://localhost:5000/api/v1/order`, config);

      alert("Category Deleted");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div className="container-fluid order ordtop">
        <div
          className="container jumbotron jumbotron-fluid"
          style={{ background: "none" }}
        >
          <h1 className="display-3">Order List</h1>

          <hr className="my-2" />
          {/* <div className="row">
            <div className="col-md-4 col-sm-4 col-lg-4">Product Image</div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Item Detail</div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Qty</div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Buyyer</div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Status</div>
          </div> */}
          <hr className="my-2" />
          {/* <div className="row ordlist">
            <div className="col-md-4 col-sm-4 col-lg-4">
              <img
                src="https://www.mccainindia.com/assets/upload/product/1514370457_french-fries-detail-img.png"
                alt=""
                style={{ width: 150 + "px" }}
              />
            </div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Item Detail</div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Qty</div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Buyyer</div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Status</div>
          </div> */}
          <div className="table-responsive ">
            <table className="table">
              <thead>
                <tr>
                  <th> Item Detail </th>
                  <th> Buyyer </th>

                  <th> Status </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {this.props.category.map((category) => ( */}
                <tr>
                  <td>{} </td>
                  <td>{} </td>
                  <td>{} </td>

                  <td className="actions" data-th="">
                    {/* <button className="btn btn-info btn-sm mr-4">
                              <i className="fa fa-edit"></i>
                            </button> */}
                    <button
                      className="btn btn-danger btn-sm"
                      // onClick={(e) => this.onDeleteCategory(category._id, e)}
                    >
                      <i className="fa fa-trash-o"></i>
                    </button>
                  </td>
                </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
