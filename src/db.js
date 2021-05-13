const postData = [
  {
    id: "1",
    title: "GraphQL",
    body: "sample data of graphql",
    published: true,
    author: "1",
  },
  {
    id: "2",
    title: "RelayJS",
    body: "sample data of RelayJS",
    published: false,
    author: "1",
  },
  {
    id: "3",
    title: "React",
    body: "sample data of React",
    published: true,
    author: "3",
  },
];

//const Users
const users = [
  {
    id: "1",
    name: "Madhav",
    email: "madhav@example.com",
    age: 30,
  },
  {
    id: "2",
    name: "XyZ",
    email: "Xyz@example.com",
    age: 29,
  },
  {
    id: "3",
    name: "abc",
    email: "abc@example.com",
  },
];

const comments = [
  {
    id: "1",
    text: "Some good tips to get on GraphQL",
    author: "1",
    post: "2",
  },
  {
    id: "2",
    text: "Great info about the graphQl and React",
    author: "3",
    post: "1",
  },
  {
    id: "3",
    text: "Great explanation",
    author: "1",
    post: "3",
  },
  {
    id: "4",
    text: "Nice explanation with examples about graphQL",
    author: "2",
    post: "2",
  },
];

const db = {
  users,
  postData,
  comments,
};

export default db;
