import React, { Component, Fragment } from "react";
import QuickModel from "./QuickModel";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Showitems extends Component {
  state = {
    product: [],
    catname: "",
  };

  componentDidMount = (async) => {
    this.setState({ product: this.props.product });
    this.setState({ catname: this.props.product.category.catname });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    // if (this.sessionStorage.getItem("isAuth") == true) {
    const token = sessionStorage.getItem("token");
    try {
      const products = {
        _id: this.state.product._id,
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
        `http://localhost:5000/api/v1/public/cart`,
        body,
        config1
      );
      console.log(result.data.data);
      alert(`Product ${result.data.data.title} added to cart`);
    } catch (err) {
      // console.log("Can't load the items");
    }
    // } else {
    //   <Redirect role="user" to="Login/user" />;
    // }
  };
  render() {
    // console.log(this.props.product.category.catname);
    const { photo, title, rate } = this.state.product;
    return (
      <Fragment>
        <div className="card col-lg-2 col-md-2 col-sm-2  animated fadeInUp wow animated m-2">
          <div className="product-tops">
            <img src={`${photo}`} className="img1 mt-2" alt="" />

            <div className="overlays">
              <Link
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
                to={{
                  pathname: "/user/Item",
                  state: {
                    product: this.state.product,
                    cat: this.state.catname,
                  },
                }}
              >
                <i className="fa fa-eye"></i>
              </Link>
              <Link
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
                onClick={this.onSubmit}
                // to={{
                //   pathname: "/user/Item",
                //   state: {
                //     product: this.state.product,
                //     cat: this.state.catname,
                //   },
                // }}
              >
                <i className="fa fa-shopping-cart"></i>
              </Link>
              {/* <button type="button" className="btn" title="Add to Cart">
                <i className="fa fa-shopping-cart"></i>
              </button> */}
            </div>
          </div>
          <div className="product-bottom text-center mt-1">
            <h4>{title}</h4>
            <h5>₹{rate}</h5>
          </div>
        </div>
        {/* <QuickModel
          product={this.state.product}
          key={this.state.product._id}
        ></QuickModel> */}
      </Fragment>
    );
  }
}
