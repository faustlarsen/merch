import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {
  let action;
  const prpductData = {
    name: "Beer",
    location: "Home",
    quantity: 2,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, {type: null})).toEqual({});
});


})
