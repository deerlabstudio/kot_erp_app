import UsersTypesServices from './service';
import { transformListUsersTypes, transformUsersType } from './transform';

export async function getUsersTypesList() {
  try {
    const usersTypesServices = new UsersTypesServices();
    const usersTypesList = await usersTypesServices.getUsersTypes();
    return transformListUsersTypes(usersTypesList);
  } catch (error) {
    throw error;
  }
}

export async function saveUsersTypesList(data) {
  try {
    const usersTypesServices = new UsersTypesServices();
    const usersTypes = await usersTypesServices.storeUsersTypes(data);
    return transformUsersType(usersTypes);
  } catch (error) {
    throw error;
  }
}

export async function updateUsersTypesList(id, data) {
  try {
    const usersTypesServices = new UsersTypesServices();
    const usersTypes = await usersTypesServices.updateUsersTypes(id, data);
    return transformUsersType(usersTypes);
  } catch (error) {
    throw error;
  }
}

export async function deleteUsersTypesList(id) {
  try {
    const usersTypesServices = new UsersTypesServices();
    const usersTypes = await usersTypesServices.deleteUsersTypes(id);
    return transformUsersType(usersTypes);
  } catch (error) {
    throw error;
  }
}
