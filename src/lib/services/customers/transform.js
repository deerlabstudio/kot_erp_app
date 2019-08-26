const transformCustomers = item => ({
  id: item.id,
  name: item.name,
  email: item.email,
  phone: item.phone,
  code: item.code,
  isCompany: item.isCompany,
  levelsId: item.levelsId,
  company: item.company,
  level: item.level,
});

const transformListCustomers = listItems => listItems.map(item => transformCustomers(item));

export {
  transformCustomers,
  transformListCustomers,
};
