const transformProducts = item => ({
  id: item.id,
  title: item.title,
  description: item.description,
  vendor: item.vendor,
  height: item.height,
  width: item.width,
  weigth: item.weigth,
  price: item.price,
  sku: item.sku,
  company: item.company,
  categoriesId: item.categoriesId,
  status: item.status,
});

const transformListProducts = listItems => listItems.map(item => transformProducts(item));

export {
  transformProducts,
  transformListProducts,
};
