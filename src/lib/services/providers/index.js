import ProvidersServices from './service';
import { transformListProviders } from './transform';

export async function getProvidersList(company) {
  try {
    const providersServices = new ProvidersServices();
    const providersList = await providersServices.getProviders(company);
    return transformListProviders(providersList);
  } catch (error) {
    throw error;
  }
}

export async function saveProviders(data) {
  try {
    const providersServices = new ProvidersServices();
    const provider = await providersServices.storeProviders(data);
    return provider;
  } catch (error) {
    throw error;
  }
}

export async function updateProviders(id, data) {
  try {
    const providersServices = new ProvidersServices();
    const provider = await providersServices.updateProviders(id, data);
    return provider;
  } catch (error) {
    throw error;
  }
}

export async function deleteProviders(id) {
  try {
    const providersServices = new ProvidersServices();
    const provider = await providersServices.deleteProviders(id);
    return provider;
  } catch (error) {
    throw error;
  }
}
