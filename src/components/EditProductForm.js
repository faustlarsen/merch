import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditProductForm (props) {
  const { product } = props;

  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      name: event.target.name.value,
      location: event.target.location.value,
      quantity: event.target.quantity.value,
      id: product.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditProductFormSubmission}
        buttonText="UPDATE" />
    </React.Fragment>
  );
}

EditProductForm.propTypes = {
  product: PropTypes.object,
  onEditProduct: PropTypes.func
};

export default EditProductForm;