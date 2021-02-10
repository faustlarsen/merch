import React from "react";
import PropTypes from "prop-types";

function Product(props) {
    return (
        <React.Fragment>
            <h3>{props.name}</h3>
            <h3>{props.description}</h3>
            <h3>{props.quantity}</h3>
        </React.Fragment>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number
   }
    


export default Product;