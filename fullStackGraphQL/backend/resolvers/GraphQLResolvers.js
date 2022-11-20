// const { users, quotes } = require("../fakedb");
const { fakedb } = require("../fakedb");
const { randomBytes } = require("crypto");

// A map of functions which return data for the schema.
exports.resolvers = {
  Query: {
    users: () => fakedb.users,
    quotes: () => fakedb.quotes,
    user: (_, { id }) => fakedb.users.find((user) => user.id === id),
    quote: (_, { id }) => fakedb.quotes.filter((quote) => quote.by === id),
  },

  Mutation: {
    createUser: (_, { input }) => {
      const newUser = {
        id: randomBytes(2).toString("hex"),
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        password: input.password,
      };
      fakedb.users.push(newUser);
      return newUser;
    },
    deleteUser: (_, { id }) => {
      fakedb.users = fakedb.users.filter((user) => user.id !== id);
      return true;
    },
  },

  User: {
    quotes: (parent, args, context) => {
      const id = parent.id;
      return fakedb.quotes.filter((quote) => quote.by === id);
    },
  },
};
