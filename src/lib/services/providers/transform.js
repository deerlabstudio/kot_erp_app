const transformProvider = item => ({
  id: item.id,
  name: item.name,
  contact: item.contact,
  email: item.email,
  phone: item.phone,
  webpage: item.contact,
  principal_phone: item.principal_phone,
  contact_phone: item.contact_phone,
  status: item.status,
});

const transformListProviders = listItems => listItems.map(item => transformProvider(item));

export {
  transformProvider,
  transformListProviders,
};
