const transformUser = user => ({
  id: user.id,
  name: user.name,
  username: user.username,
  email: user.email,
});

const transformListUsers = listUsers => listUsers.map(user => transformUser(user));

export {
  transformUser,
  transformListUsers,
};
