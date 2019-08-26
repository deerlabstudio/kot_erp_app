import CategoriesServices from './service';
import { transformListCategories } from './transform';

export async function getCategoriesList(company) {
  try {
    const categoriesServices = new CategoriesServices();
    const list = await categoriesServices.getCategories(company);
    return transformListCategories(list);
  } catch (error) {
    throw error;
  }
}

export async function saveCategories(data) {
  try {
    const categoriesServices = new CategoriesServices();
    const category = await categoriesServices.storeCategories(data);
    return category;
  } catch (error) {
    throw error;
  }
}

export async function updateCategories(id, data) {
  try {
    const categoriesServices = new CategoriesServices();
    const category = await categoriesServices.updateCategories(id, data);
    return category;
  } catch (error) {
    throw error;
  }
}

export async function deleteCategories(id) {
  try {
    const categoriesServices = new CategoriesServices();
    const category = await categoriesServices.deleteCategories(id);
    return category;
  } catch (error) {
    throw error;
  }
}
