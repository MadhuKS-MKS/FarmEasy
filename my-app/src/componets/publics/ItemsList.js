import React from "react";
import Showitems from "./Showitems";

class itemList extends React.Component {
  // state = {
  //   product: [],
  // };
  // constructor() {
  //   super();
  // }
  componentDidMount = (async) => {
    this.props.getCategory();
    this.props.getproducts(this.props.match.params);
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
                    <li
                      data-filter=".filter-app, .filter-card, .filter-logo, .filter-web"
                      className="filter-active"
                    >
                      All
                    </li>
                    {this.props.category.map((category) => (
                      <li data-filter=".filter-app" key={category._id}>
                        {category.catname}
                      </li>
                    ))}
                    <li data-filter=".filter-app">Sweets</li>
                    {/* <li data-filter=".filter-card">Juice</li>
                    <li data-filter=".filter-logo">Spices</li>
                    <li data-filter=".filter-web">Other HomeMade</li> */}
                  </ul>
                </div>
              </div>
              <div
                className="row"
                id="portfolio-wrapper"
                style={{ opacity: 1 }}
              >
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
// const userStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3,1fr)",
//   gridGap: "1rem",
// };
export default itemList;
