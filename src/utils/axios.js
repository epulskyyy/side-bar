import axios from 'axios';
export const api1 = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/dataJson`,
});

export const api2 = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/dataJson2`,
});

export const api3 = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/dataJson3`,
});
export const api4 = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/dataJson4`,
});

export const api5 = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/dataJson5`,
});
