import UserServices from './service';
import { transformListUsers } from './transform';

export async function getUsersList() {
  try {
    const userServices = new UserServices();
    const usersList = await userServices.getUsers();
    return transformListUsers(usersList);
  } catch (error) {
    throw error;
  }
}
