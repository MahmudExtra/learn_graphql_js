exports.Query = {
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;

    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }

    return filteredProducts;
  },
  product: (parent, arg, context) => {
    const { db } = context;
    const productId = arg.id;
    return db.products.find((product) => product.id === productId);
  },
  categories: (parent, arg, context) => {
    const { db } = context;
    return db.categories;
  },
  category: (parent, arg, context) => {
    const { db } = context;
    const { id } = arg;
    return db.categories.find((category) => category.id === id);
  },
};
