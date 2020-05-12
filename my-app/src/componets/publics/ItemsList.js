import React from "react";
import Showitems from "./Showitems";
import axios from "axios";

class itemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount = async () => {
    this.props.getCategory();
    // this.props.getproducts();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/products`,
        config
      );
      this.setState({
        products: res.data.data,
      });
      console.log(this.state.products);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  onClickHandler = async (cat, e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/category/${cat}/products`,
        config
      );
      this.setState({
        products: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  render() {
    // console.log(this.props);
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
                        onClick={(e) => this.onClickHandler(cat._id, e)}
                        key={cat._id}
                        name={cat._id}
                        value={cat.id}
                        // onChange={this.onChange}
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
                {this.state.products.map((product) => (
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
