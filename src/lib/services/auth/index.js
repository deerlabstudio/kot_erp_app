import AuthServices from './service';

export async function authUser(data) {
  try {
    const authServices = new AuthServices();
    const token = await authServices.auth(data);
    return token;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(data) {
  try {
    const authServices = new AuthServices();
    const user = await authServices.register(data);
    return user;
  } catch (error) {
    throw error;
  }
}
