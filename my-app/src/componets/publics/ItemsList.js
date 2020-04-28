import React from "react";
import Showitems from "./Showitems";

class itemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: "",
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount = (async) => {
    this.props.getCategory();
    this.props.getproducts(this.props.match.params);
  };
  onClickHandler = (e) => {
    this.setState({ cat: e.target.value });
    console.log(e.target.name);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <section>
          <div id="portfolio">
            <div className="container mt-5">
              <div className="page-title text-center">
                <h1>Products</h1>

                <hr className="pg-titl-bdr-btm" />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                    {/* List all Category */}
                    {this.props.category.map((cat) => (
                      <li
                        data-filter=".filter-app"
                        onClick={this.onClickHandler}
                        key={cat._id}
                        name={cat._id}
                        value={cat._id}
                      >
                        {cat.catname}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="row"
                id="portfolio-wrapper"
                style={{ opacity: 1 }}
              >
                {/* listing of products */}
                {this.props.products.map((product) => (
                  <Showitems product={product} key={product._id}></Showitems>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default itemList;
