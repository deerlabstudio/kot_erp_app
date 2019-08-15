import { processResponse } from '../../responseHandler';
import { errorHandler } from '../../errorHandler';

import ServicesEndpoints from '../../../config/services_config';

export default class LevelsServices {
  constructor() {
    this.serviceUrl = `${ServicesEndpoints.customers_services}`;
  }

  getLevels() {
    return fetch(`${this.serviceUrl}/levels`)
      .then(processResponse)
      .catch(errorHandler);
  }

  getLevelsById(id) {
    return fetch(`${this.serviceUrl}/levels/${id}`)
      .then(processResponse)
      .catch(errorHandler);
  }

  storeLevels(level) {
    return fetch(`${this.serviceUrl}/levels`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(level)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  updateLevels(id, level) {
    return fetch(`${this.serviceUrl}/levels/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(level)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  deleteLevels(id) {
    return fetch(`${this.serviceUrl}/levels/${id}`, {
        method: 'delete',
      })
      .then(processResponse)
      .catch(errorHandler);
  }
}
