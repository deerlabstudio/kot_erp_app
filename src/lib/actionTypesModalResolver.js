export const actionTypesModalResolver = (actionType) => {
  const actionTypesModifiers = {
    1: {
      title: 'New Record',
      variant: 'success',
      text: 'Create',
    },
    2: {
      title: 'Edit Record',
      variant: 'primary',
      text: 'Edit',
    },
    3: {
      title: 'Delete Record',
      variant: 'danger',
      text: 'Delete',
    }
  };

  return actionTypesModifiers[actionType];
};
