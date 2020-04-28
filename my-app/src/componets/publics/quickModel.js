import React, { Component } from "react";
import axios from "axios";

export default class QuickModel extends Component {
  state = {
    product: {},
    catname: "",
  };

  componentDidMount = (async) => {
    this.setState({ product: this.props.location.state.product });
    this.setState({ catname: this.props.location.state.cat });
  };
  onSubmit = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");
    try {
      const products = {
        _id: this.state.product._id,
      };
      const body = JSON.stringify(products);
      console.log(body);
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.post(
        `http://localhost:5000/api/v1/public/cart`,
        body,
        config1
      );
      console.log(result.data.data);
      alert(`Product ${result.data.data.title} added to cart`);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  render() {
    console.log(this.state.product);
    const {
      title,
      description,
      rate,
      stock,

      photo,
    } = this.state.product;
    console.log(this.props.location.state);
    return (
      <div>
        <section className="section-bg">
          <div id="portfolio  ">
            <div className="container mt-4  text-light">
              <div className="page-title text-center mt-4 ">
                <h1 className="text-warning">Product</h1>

                <hr className="pg-titl-bdr-btm" />
              </div>
              <div className="modal-body">
                <div className="modal-dialog product-big-img m-4">
                  <img src={`${photo}`} className=" mt-2" />
                </div>
                <div className="product-big-desc mt-3">
                  <i>
                    {" "}
                    <h2 className=" mt-4">{title}</h2>
                    <h3 className=" mt-4">Product stock :{stock} </h3>
                    <h3 className=" mt-4">Category :{this.state.catname} </h3>
                    <h4 className=" mt-4">Description :{description} </h4>
                    {/* <h6>
                  <a href="#">1 review</a>
                  <a href="#">View all review</a>
                </h6> */}
                    <div className="price">
                      {/* <h4 className="oldprice">
                <del>Rs. 3444</del>
                <sup>
                  <i> 25% OFF</i>
                </sup>
              </h4> */}
                      <h4 className="">
                        Rate: ₹{rate}
                        {/* <abbr>99 shipping</abbr> */}
                      </h4>
                    </div>
                  </i>
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
        </section>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import { Button } from "react-bootstrap";
// import PrivateRoute from "../utils/PrivateRoute";

// import axios from "axios";

// export default class quickModel extends Component {
//   state = {
//     product: [],
//   };

//   componentDidMount = (async) => {
//     this.setState({ product: this.props.product });
//   };
//   onSubmit = async (e) => {
//     e.preventDefault();

//     const token = sessionStorage.getItem("token");
//     try {
//       const products = {
//         // title: this.state.title,
//         // description: this.state.description,
//         // category: this.state.category,
//         // rate: this.state.rate,
//         // stock: this.state.stock,
//         _id: this.state.product._id,
//       };
//       const body = JSON.stringify(products);
//       console.log(body);
//       const config1 = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       };
//       const result = await axios.post(
//         `http://localhost:5000/api/v1/public/cart`,
//         body,
//         config1
//       );
//       console.log(result.data.data);
//       alert(`Product ${result.data.data.title} added to cart`);
//     } catch (err) {
//       // console.log("Can't load the items");
//     }
//   };
//   render() {
//     const {
//       photo,
//       title,
//       description,
//       stock,
//       category,

//       rate,
//     } = this.state.product;

//     // console.log(category);
//     return (
//       <div className="modal show product-view" id="quickModel" role="dialog">
//         <div className="modal-dialog">
//           <div className="modal-content" style={{ background: "none" }}>
//             <div className="modal-header">
//               <button type="button" className="close" data-dismiss="modal">
//                 &times;
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="modal-dialog product-big-img">
//                 <img
//                   src={`/myProject/backend/uploads/items/${photo}`}
//                   className=" mt-2"
//                 />
//               </div>
//               <div className="product-big-desc">
//                 <h2>{title}</h2>
//                 <h5>Product stock :{stock} </h5>
//                 {/* <h5>Category :{category.catname} </h5> */}
//                 <h5>Description :{description} </h5>

//                 {/* <h6>
//                   <a href="#">1 review</a>
//                   <a href="#">View all review</a>
//                 </h6> */}
//                 <div className="price">
//                   {/* <h4 className="oldprice">
//                 <del>Rs. 3444</del>
//                 <sup>
//                   <i> 25% OFF</i>
//                 </sup>
//               </h4> */}
//                   <h4 className="newprice">
//                     ₹{rate}
//                     {/* <abbr>99 shipping</abbr> */}
//                   </h4>
//                 </div>
//                 <button
//                   onClick={this.onSubmit}
//                   className="btn btn-warning buybutton"
//                 >
//                   Click to Buy
//                 </button>

//                  <p>
//                    <b>Warranty :</b> 1 day warranty against manufactur defect.
//                  </p>
//                  <p>
//                    <b>Shipping :</b> Dispatched within 2-3 work days.
//                  </p>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
