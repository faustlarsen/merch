import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewProductForm(props){

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation ({
      name: event.target.name.value, 
      location: event.target.location.value, 
      quantity: event.target.quantity.value, 
      id: v4()
    });
  };

  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewProductFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;