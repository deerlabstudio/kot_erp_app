import { processResponse } from '../../responseHandler';
import { errorHandler } from '../../errorHandler';

export default class UsersServices {
  constructor() {
    this.serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  }

  getUsers() {
    return fetch(this.serviceUrl)
      .then(processResponse)
      .catch(errorHandler);
  }

  getUserById(id) {
    return fetch(`${this.serviceUrl}/${id}`);
  }
}
