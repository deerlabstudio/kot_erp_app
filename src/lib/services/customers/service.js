import { processResponse } from '../../responseHandler';
import { errorHandler } from '../../errorHandler';

import ServicesEndpoints from '../../../config/services_config';

export default class CustomersServices {
  constructor() {
    this.serviceUrl = `${ServicesEndpoints.customers_services}`;
  }

  getCustomers(company) {
    return fetch(`${this.serviceUrl}/customersByCompany?company=${company}`)
      .then(processResponse)
      .catch(errorHandler);
  }

  getCustomersById(id) {
    return fetch(`${this.serviceUrl}/customers/${id}`)
      .then(processResponse)
      .catch(errorHandler);
  }

  storeCustomers(customer) {
    return fetch(`${this.serviceUrl}/customers`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  updateCustomers(id, customer) {
    return fetch(`${this.serviceUrl}/customers/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  deleteCustomers(id) {
    return fetch(`${this.serviceUrl}/customers/${id}`, {
        method: 'delete',
      })
      .then(processResponse)
      .catch(errorHandler);
  }
}
