// const users = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john@example.com"
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     email: "jane@example.com"
//   }
// ];

// function getAllUsers() {
//   return users;
// }

// function getUserById(id) {
//   return users.find((user) => user.id === Number(id));
// }

// module.exports = {
//   getAllUsers,
//   getUserById
// };

// const users = [
//   {
//     id: 1,
//     name: "Aarav Mehta",
//     email: "aarav@example.com"
//   },
//   {
//     id: 2,
//     name: "Priya Sharma",
//     email: "priya@example.com"
//   }
// ];

// function getAllUsers() {
//   return users;
// }

// function getUserById(id) {
//   return users.find((user) => user.id === Number(id));
// }

// module.exports = {
//   getAllUsers,
//   getUserById
// };


const users = [
  {
    id: 1,
    name: "Aarav Mehta",
    email: "aarav@example.com"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com"
  }
];

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find((user) => user.id === Number(id));
}

module.exports = {
  getAllUsers,
  getUserById
};
