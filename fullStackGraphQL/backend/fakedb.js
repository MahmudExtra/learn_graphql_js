// export const users

const users = [
  {
    id: "23131",
    firstName: "mukesh",
    lastName: "kumar",
    email: "mukesh@mukeshkumar.com",
    password: "123456",
  },
  {
    id: "4232",
    firstName: "suresh",
    lastName: "sharma",
    email: "suresh@sureshsharma.com",
    password: "123456",
  },
];

/*
 collection/Table - Quotes 
                        - doc1
                        - doc2
                        - etc
*/

// export const quotes
const quotes = [
  {
    name: "I turn coffee into code",
    by: "23131",
  },
  {
    name: "I am another quote",
    by: "23131",
  },
  {
    name: "If it works dont touch it",
    by: "4232",
  },
];
// exports.fakedb = { users, quotes };
exports.fakedb = { users, quotes };
