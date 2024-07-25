import type { SnackbarMessage, OptionsObject } from 'notistack';

export type Notification = {
  message: SnackbarMessage;
  options?: OptionsObject;
};
export interface AppStore {
  notification: Notification | null;
  setNotification: (notification: Notification | null) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  handleError: (error: unknown) => void;
}
