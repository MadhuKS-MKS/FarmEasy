import React, { Component, Fragment } from "react";
import QuickModel from "./QuickModel";
import { Link } from "react-router-dom";

export default class Showitems extends Component {
  state = {
    product: [],
    catname: "",
  };

  componentDidMount = (async) => {
    this.setState({ product: this.props.product });
    this.setState({ catname: this.props.product.category.catname });
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

              <button type="button" className="btn" title="Add to Cart">
                <i className="fa fa-shopping-cart"></i>
              </button>
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
