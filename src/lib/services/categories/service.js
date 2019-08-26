import { processResponse } from '../../responseHandler';
import { errorHandler } from '../../errorHandler';

import ServicesEndpoints from '../../../config/services_config';

export default class CategoriesServices {
  constructor() {
    this.serviceUrl = `${ServicesEndpoints.products_services}`;
  }

  getCategories(company) {
    return fetch(`${this.serviceUrl}/categoriesByCompany?company=${company}`)
      .then(processResponse)
      .catch(errorHandler);
  }

  getCategoriesById(id) {
    return fetch(`${this.serviceUrl}/categories/${id}`)
      .then(processResponse)
      .catch(errorHandler);
  }

  storeCategories(category) {
    return fetch(`${this.serviceUrl}/categories`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  updateCategories(id, category) {
    return fetch(`${this.serviceUrl}/categories/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  deleteCategories(id) {
    return fetch(`${this.serviceUrl}/categories/${id}`, {
        method: 'delete',
      })
      .then(processResponse)
      .catch(errorHandler);
  }
}
