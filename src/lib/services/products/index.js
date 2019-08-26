import ProductsServices from './service';
import { transformListProducts } from './transform';

export async function getProductsList(company) {
  try {
    const productsServices = new ProductsServices();
    const list = await productsServices.getProducts(company);
    return transformListProducts(list);
  } catch (error) {
    throw error;
  }
}

export async function getProductsByCompanyAndText(company, text) {
  try {
    const productsServices = new ProductsServices();
    const list = await productsServices.getProductsByCompanyAndText(company, text);
    return transformListProducts(list);
  } catch (error) {
    throw error;
  }
}

export async function saveProducts(data) {
  try {
    const productsServices = new ProductsServices();
    const product = await productsServices.storeProducts(data);
    return product;
  } catch (error) {
    throw error;
  }
}

export async function updateProducts(id, data) {
  try {
    const productsServices = new ProductsServices();
    const product = await productsServices.updateProducts(id, data);
    return product;
  } catch (error) {
    throw error;
  }
}

export async function deleteProducts(id) {
  try {
    const productsServices = new ProductsServices();
    const product = await productsServices.deleteProducts(id);
    return product;
  } catch (error) {
    throw error;
  }
}
