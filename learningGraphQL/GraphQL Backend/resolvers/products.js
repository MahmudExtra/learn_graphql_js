exports.Product = {
  category: (parent, arg, context) => {
    const { db } = context;
    const { categoryId } = parent;
    return db.categories.find((category) => category.id === categoryId);
  },
  reviews: (parent, arg, context) => {
    const { db } = context;
    const { id } = parent;
    return db.reviews.filter((review) => review.productId === id);
  },
};
