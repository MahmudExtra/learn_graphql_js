const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    db.categories.push(newCategory);

    return newCategory;
  },
  addProduct: (parent, { input }, { db }) => {
    const { name, description, quantity, price, image, onSale, categoryId } =
      input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryId,
    };
    db.products.push(newProduct);
    return newProduct;
  },
  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    db.products = db.products.map((product) => {
      if (product.categoryId === id)
        return {
          ...product,
          categoryId: null,
        };
      else return product;
    });
    return true;
  },
  updateCategory: (parent, { id, input }, { db }) => {
    const index = db.categories.findIndex((category) => category.id === id);
    db.categories[index] = {
      ...db.categories[index],
      ...input,
    };
    return db.categories[index];
  },
};
