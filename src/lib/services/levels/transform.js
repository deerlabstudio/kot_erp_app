const transformLevel = item => ({
  id: item.id,
  name: item.name,
  description: item.description,
  discount: item.discount,
});

const transformListLevels = listItems => listItems.map(item => transformLevel(item));

export {
  transformLevel,
  transformListLevels,
};
