import React from "react";
import ProductList from "./ProductList";
import NewProductForm from "./NewProductForm";
import ProductDetails from "./ProductDetails";
import EditProductForm from './EditProductForm';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, 
      createNewProduct: false, 
      masterProductList: [], 
      selectedProduct: null, 
      editing: false
    };
  }

  //Create
  handleAddingNewProductToList = (newProduct) => {
    const newMasterProductList = this.state.masterProductList.concat(newProduct);
    this.setState({
      masterProductList: newMasterProductList,
      formVisibleOnPage: false
    });
  }

  //Details
  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.masterProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }

  showFormOnClick = () => { 
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  //Edit
  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingProductInList = (productToEdit) => {
    const editedMasterProductList = this.state.masterProductList
      .filter(product => product.id !== this.state.selectedProduct.id)
      .concat(productToEdit);
    this.setState({
      masterProductList: editedMasterProductList,
      editing: false,
      selectedProduct: productToEdit 
    });
  }

  handleBuyClick = (id) => {
    const productToBuy = this.state.masterProductList.filter(
    product => product.id === this.state.selectedProduct.id)[0];
    if (productToBuy.quantity != 0) {
      productToBuy.quantity--;
    }
    const editedProductList = this.state.masterProductList
      .filter(product => product.id !==id);
    this.setState({
      masterProductList: editedProductList,
      editing: false,
      selectedProduct: null
    });
  }

  handleRestockClick = (id) => {
    const productToRestock = this.state.masterProductList.filter(
    product => product.id === this.state.selectedProduct.id)[0];
    if (productToRestock.quantity != 0) {
      productToRestock.quantity++;
    }
    const editedRestockProductList = this.state.masterProductList
      .filter(product => product.id !==id);
    this.setState({
      masterProductList: editedRestockProductList,
      editing: false,
      selectedProduct: null
    });
  }
  
  //Delete
  handleDeletingProduct = (id) => {
    const newMasterProductList = this.state.masterProductList.filter(product => product.id !== id);
    this.setState({
      masterProductList: newMasterProductList,
      selectedProduct: null
    });
  }

  render(){
    let buttonText = null;
    let currentlyVisibleState = null;

    if (this.state.editing){
      currentlyVisibleState = <EditProductForm product = {
        this.state.selectedProduct} onEditProduct = {
          this.handleEditingProductInList
        } />
      buttonText = "Product List";
    } 
    else if (this.state.selectedProduct != null) {
      currentlyVisibleState =
      <ProductDetails
        product = {this.state.selectedProduct}
        onClickingDelete = {this.handleDeletingProduct}
        onClickingRestock = {this.handleRestockClick}
        onClickingBuy = {this.handleBuyClick}
        onClickingUpdate = {this.handleEditClick} />;
        buttonText = "Product List";
    } 
    else if (this.state.formVisibleOnPage) { 
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />;
      buttonText = "Product List";
    } 
    else 
    { 
      currentlyVisibleState = <ProductList productList={this.state.masterProductList} onProductSelection={this.handleChangingSelectedProduct} />;
      buttonText = "Add Product";
    }
    return (
      <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.showFormOnClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ProductControl;





