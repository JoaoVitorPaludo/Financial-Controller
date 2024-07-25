import { AxiosError } from 'axios';
import create from 'zustand';
import { removeLocalEmail, removeLocalToken } from '../../helpers/localStorage';
import { useAuth } from '../auth/auth';
import type { AppStore, Notification } from './app.types';

const useApp = create<AppStore>((set) => ({
  notification: null,
  setNotification: (notification) => set({ notification }),

  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),

  handleError: (error) => {
    set((state) => ({ ...state, isLoading: false }));

    const notificationObject = (message: string): Notification => {
      return {
        message: message,
        options: {
          variant: 'error',
          autoHideDuration: 1500,
        },
      };
    };

    if (error instanceof AxiosError) {
      if (error.response?.data?.error) {
        if (error.response?.data?.error === 'Token inválido') {
          useAuth.getState().clearStore();
          removeLocalToken();
        } else {
          set((state) => ({
            ...state,
            notification: notificationObject(error.response?.data.error),
          }));
        }
        set((state) => ({
          ...state,
          notification: notificationObject(error.response?.data.error),
        }));
      } else {
        set((state) => ({
          ...state,
          notification: notificationObject(error.message),
        }));
      }
    } else {
      set((state) => ({
        ...state,
        notification: notificationObject('Ocorreu um erro inesperado'),
      }));
    }
  },
}));

export { useApp };
