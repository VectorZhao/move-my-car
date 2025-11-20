import axios from 'axios';

const base =
  import.meta.env.VITE_API_URL?.replace(/\/$/, '') ??
  `${window.location.origin.replace(/\/$/, '')}/api`;

const api = axios.create({
  baseURL: base
});

export const attachToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export default api;
