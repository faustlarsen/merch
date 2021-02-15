import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {
  let action;
  const productData = {
    name: "Beer",
    location: "Home",
    quantity: 2,
    id: 1
  };

  const currentState = {
    1: {name: 'Beer',
    location: 'Home',
    quantity: 2, 
    id: 1},
    2: {name: 'Vodka',
    location: "away",
    quantity: 3,
    id: 2 }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, {type: null})).toEqual({});
});

  test('Should successfully add new product to masterProductList', () => {
  const {name, location, quantity, id} = productData;
  action = {
    type: 'ADD_PRODUCT',
    name: name,
    location: location,
    quantity: quantity,
    id: id
  }
  expect(productListReducer({}, action)).toEqual({
    [id] : {
      name: name,
      location: location,
      quantity: quantity,
      id: id
    }
  });
});
  test('Should successfully delete a product', () => {
    action = {
      type: 'DELETE_PRODUCT',
      id: 1
    }
    expect(productListReducer(currentState, action)).toEqual({
      2: {name: 'Vodka',
        location: 'away',
        quantity: 3,
        id: 2}
    });
  })

  test("Should successfully edit a product", () => {
    action = {
    type: "EDIT_PRODUCT",
    name: 'Wine',
    location: 'Celler',
    quantity: 12, 
    id: 1
    }
    expect(productListReducer(currentState, action)).toEqual({
      1: {name: 'Wine',
      location: 'Celler',
      quantity: 12, 
      id: 1},
      2: {name: 'Vodka',
      location: "away",
      quantity: 3,
      id: 2 }
    });
  })

});

