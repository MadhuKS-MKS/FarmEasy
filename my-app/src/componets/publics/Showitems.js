import React, { Component } from "react";

export default class Showitems extends Component {
  render() {
    return (
      <div>
        <section>
          <div id="portfolio">
            <div class="container mt-5">
              <div class="page-title text-center">
                <h1>Products</h1>

                <hr class="pg-titl-bdr-btm" />
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <ul id="portfolio-flters">
                    <li
                      data-filter=".filter-app, .filter-card, .filter-logo, .filter-web"
                      class="filter-active"
                    >
                      All
                    </li>
                    <li data-filter=".filter-app">Sweets</li>
                    <li data-filter=".filter-card">Juice</li>
                    <li data-filter=".filter-logo">Spices</li>
                    <li data-filter=".filter-web">Other HomeMade</li>
                  </ul>
                </div>
              </div>

              <div class="row" id="portfolio-wrapper" style={{ opacity: 1 }}>
                <div className="card col-lg-2 col-md-2 col-sm-2  animated fadeInUp wow animated ">
                  <div className="product-tops">
                    <img
                      src="https://recipes.timesofindia.com/recipes/homemade-chocolate/photo/54407737.cms"
                      className="img1 mt-2"
                    />

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
                    <h4>Product 1</h4>
                    <h5>₹300.00</h5>
                  </div>
                </div>
              </div>
              <div
                className="modal show product-view"
                id="quickModel"
                role="dialog"
              >
                <div className="modal-dialog">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>
                  <div className="modal-dialog product-big-img">
                    <img
                      src="https://recipes.timesofindia.com/recipes/homemade-chocolate/photo/54407737.cms"
                      className=" mt-2"
                    />
                  </div>
                  <div className="product-big-desc">
                    <h2>Product 1</h2>
                    <h5>Product code : </h5>
                    <h5>Brand :</h5>
                    <h6>
                      <a href="#">1 review</a>
                      <a href="#">View all review</a>
                    </h6>
                    <div className="price">
                      <h4 className="oldprice">
                        <del>Rs. 3444</del>
                        <sup>
                          <i> 25% OFF</i>
                        </sup>
                      </h4>
                      <h4 className="newprice">
                        Rs. 222 +<abbr>99 shipping</abbr>
                      </h4>
                    </div>
                    <button className="btn btn-warning buybutton">
                      Click to Buy
                    </button>
                    <p>
                      <b>Warranty :</b> 1 day warranty against manufactur
                      defect.
                    </p>
                    <p>
                      <b>Shipping :</b> Dispatched within 2-3 work days.
                    </p>
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