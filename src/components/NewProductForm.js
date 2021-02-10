import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewProductForm(props) {
    function handleNewProductFormSubmission(event) {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.description.value);
        console.log(event.target.quantity.value);
        props.onNewProductCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
    }

return (
    <React.Fragment>
        <h3>New Product Form</h3>
        <form onSubmit={handleNewProductFormSubmission}>
        <input 
            type='text'
            name='name'
            placeholder='Product Name'/>
        <input
          type='text'
          name='description' 
          placeholder='Product Description'/>
        <input
          type='number'
          name='quantity'
          placeholder='Product Quantity'/>
          <button type='submit'>SUBMIT</button>
        </form>
    </React.Fragment>
  )
}

NewProductForm.propTypes = {
    onNewProductCreation: PropTypes.func
};

export  default NewProductForm;