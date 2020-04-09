import React from "react";

export default function Contact() {
  return (
    <div className="container-fluid mt-5">
      <div className="footer_section " id="contact">
        <div className="container">
          <section className="main-section contact" id="contact">
            <div className="contact_section">
              <h2>Contact Us</h2>
              <div className="row">
                <div className="col-lg-4">
                  <div className="contact_block">
                    <div className="contact_block_icon rollIn animated wow animated">
                      <span>
                        <i className="fa fa-home fa-5x"></i>
                      </span>
                    </div>
                    <span>
                      {" "}
                      308 Negra Arroyo Lane, <br></br>
                      Albuquerque, NM, 87104{" "}
                    </span>{" "}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact_block">
                    <div className="contact_block_icon icon2 rollIn animated wow animated">
                      <span>
                        <i className="fa fa-phone fa-5x"></i>
                      </span>
                    </div>
                    <span> 1-800-BOO-YAHH </span>{" "}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact_block">
                    <div className="contact_block_icon icon3 rollIn animated wow animated">
                      <span>
                        <i className="fa fa-pencil fa-5x"></i>
                      </span>
                    </div>
                    <span>
                      {" "}
                      <a href="mailto:hello@butterfly.com">
                        {" "}
                        hello@butterfly.com
                      </a>{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft animated">
                <div className="contact-info-box address clearfix">
                  <h3>Don’t be shy. Say hello!</h3>
                  <p>
                    We are trying to connect small and large farmers to sell
                    their quality product to the diffent places.
                  </p>
                  <p>If any suggestions or tips let us know</p>
                </div>
                <ul className="social-link">
                  <li className="twitter animated bounceIn wow delay-02s animated">
                    <a href="(0)">
                      <i className="fa fa-twitter fa-2x"></i>
                    </a>
                  </li>
                  <li className="facebook animated bounceIn wow delay-03s animated">
                    <a href="(0)">
                      <i className="fa fa-facebook fa-2x"></i>
                    </a>
                  </li>
                  <li className="pinterest animated bounceIn wow delay-04s animated">
                    <a href="(0)">
                      <i className="fa fa-pinterest fa-2x"></i>
                    </a>
                  </li>
                  <li className="gplus animated bounceIn wow delay-05s animated">
                    <a href="(0)">
                      <i className="fa fa-google-plus fa-2x"></i>
                    </a>
                  </li>
                  <li className="dribbble animated bounceIn wow delay-06s animated">
                    <a href="(0)">
                      <i className="fa fa-dribbble fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 wow fadeInUp delay-06s animated">
                <div className="form">
                  <div id="sendmessage">
                    Your message has been sent. Thank you!
                  </div>
                  <div id="errormessage"></div>
                  <form
                    action=""
                    method="post"
                    role="form"
                    className="contactForm"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control input-text"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control input-text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div className="validation"></div>
                    </div>

                    <button type="submit" className="btn input-btn">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
