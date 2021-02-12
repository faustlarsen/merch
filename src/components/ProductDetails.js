import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
    const {product, onClickingBuy, onClickingDelete } = props;
    return (
    <React.Fragment>
        <h3>Product Deatils</h3>
        <h6>Name: {product.name}</h6>
        <h6>Location: {product.location}</h6>
        {product.quantity === 0 ?
        <h3>Out of Stock</h3>
        : <h3>Quantity: {product.quantity}</h3>
        }
        <hr></hr>
        {product.quantity > 0 ? <button onClick={ props.onClickingBuy }>BUY</button> : null }
        <button onClick={ props.onClickingRestock }>RESTOCK</button>
        <button onClick={() => onClickingDelete(product.id)}>DELETE</button>
        <button onClick={ props.onClickingUpdate }>UPDATE</button>
        
    </React.Fragment>
  );
}

ProductDetail.protoTypes = {
    product: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingUpdate: PropTypes.func,
    onClickingBuy: PropTypes.func,
    onClickingRestock: PropTypes.func,

}

export default ProductDetail;