const users = [];

const addUser = ({ id, name, room }) => {
  const existingUser = users.find((user) => {
    return user.name === name && user.room === room;
  });
  if (existingUser) {
    return {
      error: "User is taken",
    };
  }
  const user = { id, name, room };
  users.push(user);
  return user;
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    user.id === id;
  });
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);
const getUserInRoom = (room) => users.find((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUserInRoom };
