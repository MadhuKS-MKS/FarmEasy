import React from "react";
import axios from "axios";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      subject: "",
    };
    this.onChange = this.onChange.bind(this);
  }
  // Input on change
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  // register
  onSubmit = async (e) => {
    e.preventDefault();

    const reg = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      subject: this.state.subject,
    };

    const body = JSON.stringify(reg);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // console.log(body);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/reviews`,
        body,
        config
      );
      console.log(res.data);
    } catch (error) {
      alert("Error Login!!");
    }
  };
  render() {
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
                      Your review worth a lot for us. Thank you!
                    </div>
                    <div id="errormessage"></div>
                    <form onSubmit={this.onSubmit}>
                      <div className="form-conntrol">
                        <input
                          type="text"
                          name="name"
                          className="form-control input-text"
                          id="name"
                          value={this.state.name}
                          onChange={this.onChange}
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
                          value={this.state.email}
                          onChange={this.onChange}
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
                          value={this.state.subject}
                          onChange={this.onChange}
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
                          value={this.state.message}
                          onChange={this.onChange}
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
}
