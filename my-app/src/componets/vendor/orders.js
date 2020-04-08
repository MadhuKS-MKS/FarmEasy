import React, { Component } from "react";

export default class orders extends Component {
  render() {
    return (
      <div className="container-fluid order ordtop">
        <div
          class="container jumbotron jumbotron-fluid"
          style={{ background: "none" }}
        >
          <h1 class="display-3">Order List</h1>

          <hr class="my-2" />
          <div class="row">
            <div className="col-md-4 col-sm-4 col-lg-4">Product Image</div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Item Detail</div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Qty</div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Buyyer</div>
            <div className="col-md-2 col-sm-2 col-lg-2"> Status</div>
          </div>
          <hr class="my-2" />
          <div class="row ordlist">
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
          </div>
        </div>
      </div>
    );
  }
}
