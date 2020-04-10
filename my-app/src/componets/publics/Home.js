import React, { Component, Fragment } from "react";
// import "../CSS/Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <section id="section1" className="" style={{ marginTop: 80 + "px" }}>
          <div className="leftside">
            <img
              src="https://images.vexels.com/media/users/3/148171/isolated/preview/b4ad26cf6cc8ad39b0923cf65e1ea540-abstract-rectangle-background-vector-by-vexels.png"
              alt=""
            />
          </div>
          <div className="rightside rollIn animated wow animated">
            <div className="container ">
              <h1>Our HomeMade products</h1>
              <p>Here this is the place which u looking for.</p>
              <a href="/Home#product" className="btn btn-success welcome">
                Shop Now
              </a>
            </div>
          </div>
        </section>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        {/*  */}
        <section id="service">
          <div className="container">
            <h2>Services</h2>
            <div className="service_area">
              <div className="row">
                <div className="col-lg-4">
                  <div className="service_block">
                    <div className="service_icon delay-03s animated wow  zoomIn animated">
                      {" "}
                      <span>
                        <i className="fa fa-truck fa-3x"></i>
                      </span>{" "}
                    </div>
                    <h3 className="animated zoomIn wow animated">
                      Free Shipping
                    </h3>
                    <p className="animated zoomIn wow animated">
                      Proin iaculis purus consequat sem cure digni. Donec
                      porttitora entum suscipit aenean rhoncus posuere odio in
                      tincidunt.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service_block delay-03s rollIn animated wow animated">
                    <div className="service_icon icon2  delay-03s animated wow zoomIn animated">
                      {" "}
                      <span>
                        <i className="fa fa-clock-o fa-3x"></i>
                      </span>{" "}
                    </div>
                    <h3 className="animated fadeInUp wow animated">
                      24 X 7 Service
                    </h3>
                    <p className="animated fadeInDown wow animated">
                      Proin iaculis purus consequat sem cure digni. Donec
                      porttitora entum suscipit aenean rhoncus posuere odio in
                      tincidunt.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service_block">
                    <div className="service_icon icon3  delay-03s animated wow zoomIn animated">
                      {" "}
                      <span>
                        <i className="fa fa-gift fa-3x"></i>
                      </span>{" "}
                    </div>
                    <h3 className="animated fadeInUp wow animated">
                      Festival Offres
                    </h3>
                    <p className="animated fadeInDown wow animated">
                      Proin iaculis purus consequat sem cure digni. Donec
                      porttitora entum suscipit aenean rhoncus posuere odio in
                      tincidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/*  */}
        {/*  */}

        <div className=" container-fluid mt-5" id="product">
          <h2> New Arrival</h2>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://cdn.shopify.com/s/files/1/1087/0872/products/Kerala_Prawn_Pickle_product_1_1525852674359_grande.jpg?v=1571607439"
                  className="img1"
                  alt=""
                />

                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                    data-toggle=""
                    data-target=""
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <h3>Product 1</h3>
                <h5>₹300.00</h5>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://cdn.shopify.com/s/files/1/1087/0872/products/Kerala_Prawn_Pickle_product_1_1525852674359_grande.jpg?v=1571607439"
                  className="img1"
                  alt=""
                />
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <h3>Product 1</h3>
                <h5>₹300.00</h5>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://cdn.shopify.com/s/files/1/1087/0872/products/Kerala_Prawn_Pickle_product_1_1525852674359_grande.jpg?v=1571607439"
                  className="img1"
                  alt=""
                />
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <h3>Product 1</h3>
                <h5>₹300.00</h5>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://cdn.shopify.com/s/files/1/1087/0872/products/Kerala_Prawn_Pickle_product_1_1525852674359_grande.jpg?v=1571607439"
                  className="img1"
                  alt=""
                />
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <h3>Product 1</h3>
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
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-dialog product-big-img">
                <img
                  src="https://recipes.timesofindia.com/recipes/homemade-chocolate/photo/54407737.cms"
                  className=" mt-2"
                  alt=""
                />
              </div>
              <div className="product-big-desc">
                <h2>Product 1</h2>
                <h5>Product code : </h5>
                <h5>Brand :</h5>
                <h6>
                  <a href="">1 review</a>
                  <a href="">View all review</a>
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
                  <b>Warranty :</b> 1 day warranty against manufactur defect.
                </p>
                <p>
                  <b>Shipping :</b> Dispatched within 2-3 work days.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container col-md-2">
          <a className="btn shop text-center mx-auto block" href={"/Showitems"}>
            Start Shopping
          </a>
        </div>
        {/*  */}
        {/*  */}
      </Fragment>
    );
  }
}

export default Home;
