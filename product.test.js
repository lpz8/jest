const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
  resetProducts();
});

test('should add a product', () => {
  const result = addProduct('Laptop', 1000);
  expect(result).toHaveLength(1);
  expect(result[0]).toEqual({ id: 0, name: 'Laptop', price: 1000 });
});

test('should fail when adding a repeated product', () => {
  addProduct('Laptop', 1000);
  expect(() => addProduct('Laptop', 500)).toThrow('Product already exists');
});

test('should fail when adding a product with no name', () => {
  expect(() => addProduct('', 500)).toThrow('Name and price are required');
});

test('should remove a product', () => {
  addProduct('Laptop', 1000);
  const result = removeProduct(0);
  expect(result).toHaveLength(0);
});

test('should fail when removing a product that does not exist', () => {
  expect(() => removeProduct(0)).toThrow('Product does not exist');
});

test('should return the list of products', () => {
  addProduct('Laptop', 1000);
  const result = getProducts();
  expect(result).toEqual([{ id: 0, name: 'Laptop', price: 1000 }]);
});

test('should get a product by id', () => {
  addProduct('Laptop', 1000);
  const result = getProduct(0);
  expect(result).toEqual({ id: 0, name: 'Laptop', price: 1000 });
});

test('should fail when getting a product that does not exist', () => {
  expect(() => getProduct(0)).toThrow('Product does not exist');
});

test('should update a product', () => {
  addProduct('Laptop', 1000);
  updateProduct(0, 'NewLaptop', 1200);
  const result = getProduct(0);
  expect(result).toEqual({ id: 0, name: 'NewLaptop', price: 1200 });
});

test('should fail when updating a product that does not exist', () => {
  expect(() => updateProduct(0, 'NewLaptop', 1200)).toThrow('Product does not exist');
});

test('should only update the price', () => {
  addProduct('Laptop', 1000);
  updateProduct(0, undefined, 1200);
  const result = getProduct(0);
  expect(result).toEqual({ id: 0, name: 'Laptop', price: 1200 });
});

test('should only update the name', () => {
  addProduct('Laptop', 1000);
  updateProduct(0, 'NewLaptop', undefined);
  const result = getProduct(0);
  expect(result).toEqual({ id: 0, name: 'NewLaptop', price: 1000 });
});