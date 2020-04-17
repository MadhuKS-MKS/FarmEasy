import React, { Component, Fragment } from "react";
import QuickModel from "./QuickModel";

export default class Showitems extends Component {
  state = {
    product: [],
  };

  componentDidMount = (async) => {
    this.setState({ product: this.props.product });
  };
  render() {
    console.log(this.state.product.title);
    const { photo, title, rate } = this.state.product;
    return (
      <Fragment>
        <div className="card col-lg-2 col-md-2 col-sm-2  animated fadeInUp wow animated m-2">
          <div className="product-tops">
            <img src={photo} className="img1 mt-2" alt="" />

            <div className="overlays">
              <button
                type="button"
                className="btn  m-1"
                title="Quick Shop"
                data-toggle="modal"
                data-target="#quickModel"
              >
                <i className="fa fa-eye "></i>
              </button>

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
        <QuickModel
          product={this.state.product}
          key={this.state.product._id}
        ></QuickModel>
      </Fragment>
    );
  }
}
