import CustomersServices from './service';
import { transformListCustomers } from './transform';

export async function getCustomersList(company) {
  try {
    const customersServices = new CustomersServices();
    const list = await customersServices.getCustomers(company);
    return transformListCustomers(list);
  } catch (error) {
    throw error;
  }
}

export async function saveCustomers(data) {
  try {
    const customersServices = new CustomersServices();
    const customer = await customersServices.storeCustomers(data);
    return customer;
  } catch (error) {
    throw error;
  }
}

export async function updateCustomers(id, data) {
  try {
    const customersServices = new CustomersServices();
    const customer = await customersServices.updateCustomers(id, data);
    return customer;
  } catch (error) {
    throw error;
  }
}

export async function deleteCustomers(id) {
  try {
    const customersServices = new CustomersServices();
    const customer = await customersServices.deleteCustomers(id);
    return customer;
  } catch (error) {
    throw error;
  }
}
