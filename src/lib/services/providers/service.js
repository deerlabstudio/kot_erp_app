import { processResponse } from '../../responseHandler';
import { errorHandler } from '../../errorHandler';

import ServicesEndpoints from '../../../config/services_config';

export default class ProvidersServices {
  constructor() {
    this.serviceUrl = `${ServicesEndpoints.providers_services}`;
  }

  getProviders() {
    return fetch(`${this.serviceUrl}/providers`)
      .then(processResponse)
      .catch(errorHandler);
  }

  getProvidersById(id) {
    return fetch(`${this.serviceUrl}/providers/${id}`)
      .then(processResponse)
      .catch(errorHandler);
  }

  storeProviders(provider) {
    return fetch(`${this.serviceUrl}/providers`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(provider)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  updateProviders(id, provider) {
    return fetch(`${this.serviceUrl}/providers/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(provider)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  deleteProviders(id) {
    return fetch(`${this.serviceUrl}/providers/${id}`, {
        method: 'delete',
      })
      .then(processResponse)
      .catch(errorHandler);
  }
}
