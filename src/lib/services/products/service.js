import { processResponse } from '../../responseHandler';
import { errorHandler } from '../../errorHandler';

import ServicesEndpoints from '../../../config/services_config';

export default class ProductsServices {
  constructor() {
    this.serviceUrl = `${ServicesEndpoints.products_services}`;
  }

  getProducts(company) {
    return fetch(`${this.serviceUrl}/productsByCompany?company=${company}`)
      .then(processResponse)
      .catch(errorHandler);
  }

  getProductsById(id) {
    return fetch(`${this.serviceUrl}/products/${id}`)
      .then(processResponse)
      .catch(errorHandler);
  }

  getProductsByCompanyAndText(company, text) {
    return fetch(`${this.serviceUrl}/productsByCompanyAndText?company=${company}&text=${text}`)
      .then(processResponse)
      .catch(errorHandler);
  }

  storeProducts(product) {
    return fetch(`${this.serviceUrl}/products`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  updateProducts(id, product) {
    return fetch(`${this.serviceUrl}/products/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  deleteProducts(id) {
    return fetch(`${this.serviceUrl}/products/${id}`, {
        method: 'delete',
      })
      .then(processResponse)
      .catch(errorHandler);
  }
}
