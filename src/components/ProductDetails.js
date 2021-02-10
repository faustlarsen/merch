import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

function ProductDetail(props) {

if (product.quntity != "Out of stock"){
    <button onClick={() => onClickBuy(product.id)}>BUY</button>
}
    

}


return (
    <React.Fragment>
        <h3>Product Deatils</h3>
        <h6>Name: {product.name}</h6>
        <h6>Description: {product.description}</h6>
        <h6>Qiuntity: {product.quantity}</h6>
        <hr></hr>
        <button>RESTOCK</button>
        <button>UPDATE</button>
        <button>DELETE</button>
    

    </React.Fragment>
)


ProductDetail.protoTypes = {

}

export default ProductDetail;