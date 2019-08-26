import UserServices from './service';
import { transformListUsers } from './transform';

export async function getUsersList(company) {
  try {
    const userServices = new UserServices();
    const usersList = await userServices.getUsers(company);
    return transformListUsers(usersList);
  } catch (error) {
    throw error;
  }
}

export async function saveUsers(data) {
  try {
    const userServices = new UserServices();
    const user = await userServices.storeUsers(data);
    return user;
  } catch (error) {
    throw error;
  }
}

export async function updateUsers(id, data) {
  try {
    const userServices = new UserServices();
    const user = await userServices.updateUsers(id, data);
    return user;
  } catch (error) {
    throw error;
  }
}

export async function deleteUsers(id) {
  try {
    const userServices = new UserServices();
    const user = await userServices.deleteUsers(id);
    return user;
  } catch (error) {
    throw error;
  }
}
