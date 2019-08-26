export const errorHandler = (response) => {
  const error = {
    message: response.statusText,
    code: response.status,
  };
  throw error;
};
