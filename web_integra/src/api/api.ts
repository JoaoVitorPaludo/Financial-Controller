import axios from 'axios';
import { useAuth } from '../store/auth/auth';

const makeHeaders = () => {
  const token = useAuth.getState().token;

  if (token) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  } else {
    useAuth.destroy();
  }
};

const api = axios.create({ baseURL: 'http://localhost:3000' });

export { api, makeHeaders };
