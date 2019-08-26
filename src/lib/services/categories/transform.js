const transformCategories = item => ({
  id: item.id,
  name: item.name,
  description: item.description,
  status: item.description,
  company: item.company,
});

const transformListCategories = listItems => listItems.map(item => transformCategories(item));

export {
  transformCategories,
  transformListCategories,
};
