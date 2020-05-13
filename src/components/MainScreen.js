import React from "react";
import {AddProductForm} from "./AddProductForm";
import "../main.css";
import {ProductTable} from "./ProductTable";
import ErrorGif from "../error.gif";

export class MainScreen extends React.Component {

  state = {
    products: "",
    error: false
  };

  componentDidMount() {
    this.fetchData().then(data => {
      if (data) {
        this.setState({products: data})
      } else {
        this.setState({error: true})
      }
    })
  }

  fetchData = async () => {
    const response = await fetch(
        "http://usweb.dotomi.com/resources/swfs/cookies.json");
    if (response.ok) {
      return await response.json()
    }
  };

  sort = () => {
    let sortedProducts = this.state.products.sort(
        (a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({
      products: sortedProducts
    });
  };

  addProduct = (product) => {
    product.price = `$${product.price}`;
    this.setState({
      products: [
        ...this.state.products,
        product
      ]
    }, () => alert("Product added successfully!"))
  };

  render() {
    return (
        <div className="container">
          <div className="row pt-3 pl-3">
            <h2>Epsilon Assignment</h2>
          </div>
          <hr/>
          {!this.state.error && <div className="row">
            <div className="col-6">
              <ProductTable
                  products={this.state.products}
                  sort={this.sort}/>
            </div>
            <div className="col-6 border-dark">
              <AddProductForm
                  addProduct={this.addProduct}/>
            </div>
          </div>}
          {this.state.error &&
          <img src={ErrorGif}
               alt="Loading..."
               className="custom-align"/>}
        </div>
    )
  }
}
