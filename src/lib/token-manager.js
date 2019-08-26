const TOKEN_KEY = 'token';
const COMPANY_KEY = 'company';

export const saveToken = (token, company) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(COMPANY_KEY, company);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getCompany = () => localStorage.getItem(COMPANY_KEY);

export const deleteToken = () => localStorage.clear();
