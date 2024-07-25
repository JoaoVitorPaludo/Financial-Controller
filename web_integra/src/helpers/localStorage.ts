import type { Token } from '../store/auth/auth.types';
import { keyEmail, keyToken } from './percistence';

export const setLocalToken = (token: Token) => {
  if (token) {
    localStorage.setItem(keyToken, token);
  }
};

export const getLocalToken = () => {
  return localStorage.getItem(keyToken);
};

export const removeLocalToken = () => {
  localStorage.removeItem(keyToken);
};

export const setLocalEmail = (email: string) => {
  localStorage.setItem(keyEmail, email);
};

export const getLocaclEmail = () => {
  return localStorage.getItem(keyEmail);
};

export const removeLocalEmail = () => {
  localStorage.removeItem(keyEmail);
};
