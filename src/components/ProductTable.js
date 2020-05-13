import React from "react";

export const ProductTable = ({products, sort}) =>
    <table className="table table-striped borderStyle">
      <thead className="thead-dark">
      <tr>
        <th scope="col" colSpan={2}>Product Name <i
            className="fas fa-sort-alpha-down float-right pt-1"
            onClick={sort}/></th>
        <th scope="col">Price</th>
        <th scope="col">Category</th>
      </tr>
      </thead>
      <tbody>
      {products &&
      products.map((product, index) =>
          <tr className="product-item" key={index}>
            <td colSpan={2}>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
          </tr>
      )}
      </tbody>
    </table>;
