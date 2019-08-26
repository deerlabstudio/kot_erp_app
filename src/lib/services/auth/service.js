import { processResponse } from '../../responseHandler';
import { errorHandler } from '../../errorHandler';

import ServicesEndpoints from '../../../config/services_config';

export default class AuthServices {
  constructor() {
    this.serviceUrl = `${ServicesEndpoints.auth_services}`;
  }

  auth(user) {
    return fetch(`${this.serviceUrl}/company/auth`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(processResponse)
    .catch(errorHandler);
  }

  register(user) {
    return fetch(`${this.serviceUrl}/register`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(processResponse)
    .catch(errorHandler);
  }
}
