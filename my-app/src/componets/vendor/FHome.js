import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/farm.css";

class FHome extends Component {
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div class="card text-center">
                  <img class="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div class="card-body">
                    <h4 class="card-title">Products</h4>
                    <p class="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}

        <section class="counts section-bg mt-5">
          <div class="container mt-5">
            <div class="row">
              <div
                class="col-lg-3 col-md-6 text-center  animated fadeInUp wow animated"
                data-aos="fade-up"
              >
                <div class="count-box">
                  <i
                    class="fa fa-smile-o fa-5x"
                    style={{ color: "#20b38e" }}
                  ></i>
                  <p>
                    <span className="counter-up animated swing">232</span>
                  </p>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6 text-center animated fadeInUp wow animated"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="count-box">
                  <i
                    class="fa fa-folder-open fa-5x"
                    style={{ color: "#c042ff" }}
                  ></i>
                  <p>
                    <span className="counter-up animated swing">521</span>
                  </p>
                  <p>Stock</p>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6 text-center animated fadeInUp wow animated"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="count-box">
                  <i
                    class="fa fa-comments fa-5x"
                    style={{ color: "#46d1ff" }}
                  ></i>
                  <p>
                    <span className="counter-up animated swing">
                      <i>1,463</i>
                    </span>
                  </p>
                  <p>Sold</p>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6 text-center animated fadeInUp wow animated"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div class="count-box">
                  <i class="fa fa-users fa-5x" style={{ color: "#ffb459" }}></i>
                  <p>
                    {" "}
                    <span className="counter-up animated swing">15</span>
                  </p>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default FHome;
