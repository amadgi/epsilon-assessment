import React from "react";

export class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "",
        price: "",
        category: ""
      },
      error: false
    }
  }

  insert = (e) => {
    e.preventDefault();
    if (this.validateProduct()) {
      this.props.addProduct(this.state.product)
    } else {
      this.setState({
        error: true
      })
    }
  };

  validateProduct = () => {
    return (!(/^\s*$/.test(this.state.product.name)) && !(/^\s*$/.test(
        this.state.product.category)) && this.state.product.price)
  };

  render() {
    return (
        <div className="borderStyle p-5">
          <h3>Add New Product</h3>
          <hr/>
          <form>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input type="text"
                     className="form-control"
                     id="productName"
                     placeholder="Enter Product Name"
                     onChange={(e) => this.setState({
                       error: false,
                       product: {
                         ...this.state.product,
                         name: e.target.value
                       }
                     })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input type="number"
                     min="0"
                     className="form-control"
                     id="price"
                     placeholder="Enter price"
                     onChange={(e) => this.setState({
                       error: false,
                       product: {
                         ...this.state.product,
                         price: e.target.value
                       }
                     })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input type="text"
                     className="form-control"
                     id="category"
                     placeholder="Enter Category"
                     onChange={(e) => this.setState({
                       error: false,
                       product: {
                         ...this.state.product,
                         category: e.target.value
                       }
                     })}
              />
            </div>
            {this.state.error &&
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                Please fill out all the fields!
              </div>
            </div>}
            <button type="submit"
                    className="btn btn-primary btn-block"
                    onClick={(e) => {
                      this.insert(e)
                    }}>
              Add Product
            </button>
          </form>
        </div>
    )
  }

}
