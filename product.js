let products = [];
let id = 0;

function resetProducts() {
  products = [];
  id = 0;
}

function addProduct(name, price) {
  if (!name || !price) {
    throw new Error('Name and price are required');
  }
  if (products.some(p => p.name === name)) {
    throw new Error('Product already exists');
  }
  products.push({ id: id++, name, price });
  return products;
}

function removeProduct(idToRemove) {
  const productIndex = products.findIndex(p => p.id === idToRemove);
  if (productIndex === -1) {
    throw new Error('Product does not exist');
  }
  products.splice(productIndex, 1);
  return products;
}

function getProducts() {
  return products;
}

function getProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) {
    throw new Error('Product does not exist');
  }
  return product;
}

function updateProduct(id, name, price) {
  const product = products.find(p => p.id === id);
  if (!product) {
    throw new Error('Product does not exist');
  }
  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;
  return product;
}

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };