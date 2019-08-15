import { transformUsersType } from '../userstypes/transform';

const transformUser = user => ({
  id: user.id,
  firstname: user.firstname,
  lastname: user.lastname,
  email: user.email,
  avatar: user.avatar,
  status: user.status,
  usersTypesId: user.usersTypesId,
  UsersType: transformUsersType(user.UsersType),
});

const transformListUsers = listUsers => listUsers.map(user => transformUser(user));

export {
  transformUser,
  transformListUsers,
};
