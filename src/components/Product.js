import React from "react";
import PropTypes from "prop-types";

function Product(props) {
    return (
        <React.Fragment>
             <div onClick = {() => props.whenProductClicked(props.id)}> 
            <h3>Name:{props.name}</h3>
            <h3>Location:{props.location}</h3>
            <h3>Quantity:{props.quantity}</h3>
            </div>
        </React.Fragment>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    quantity: PropTypes.number,
    id: PropTypes.string,
    whenProductClicked: PropTypes.func
   }
    
export default Product;