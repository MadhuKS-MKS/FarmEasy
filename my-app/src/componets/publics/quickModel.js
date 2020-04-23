import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class quickModel extends Component {
  state = {
    product: [],
  };

  componentDidMount = (async) => {
    this.setState({ product: this.props.product });
  };
  render() {
    const {
      photo,
      title,
      description,
      stock,
      category,

      rate,
    } = this.state.product;
    // console.log(category);
    return (
      <div className="modal show product-view" id="quickModel" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content" style={{ background: "none" }}>
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-dialog product-big-img">
                <img
                  src={`/myProject/backend/uploads/items/${photo}`}
                  className=" mt-2"
                />
              </div>
              <div className="product-big-desc">
                <h2>{title}</h2>
                <h5>Product stock :{stock} </h5>
                {/* <h5>Category :{category.catname} </h5> */}
                <h5>Description :{description} </h5>

                <h6>
                  <a href="#">1 review</a>
                  <a href="#">View all review</a>
                </h6>
                <div className="price">
                  {/* <h4 className="oldprice">
                <del>Rs. 3444</del>
                <sup>
                  <i> 25% OFF</i>
                </sup>
              </h4> */}
                  <h4 className="newprice">
                    ₹{rate}
                    {/* <abbr>99 shipping</abbr> */}
                  </h4>
                </div>
                <button
                  onClick={this.onSubmit}
                  className="btn btn-warning buybutton"
                >
                  Click to Buy
                </button>

                <p>
                  <b>Warranty :</b> 1 day warranty against manufactur defect.
                </p>
                <p>
                  <b>Shipping :</b> Dispatched within 2-3 work days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
