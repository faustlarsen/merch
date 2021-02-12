import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <React.Fragment>
      {props.productList.map((product) =>
        <Product 
          whenProductClicked = {props.onProductSelection} 
          name={product.name}
          location={product.location}
          quantity={product.quantity}
          id={product.id} />
      )}
    </React.Fragment>
  )
}

ProductList.propTypes = {
    productList: PropTypes.array,
    onProductSelection: PropTypes.func
}

export default ProductList;