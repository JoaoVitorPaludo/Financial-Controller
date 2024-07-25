import { useApp } from '../store/app/app';
import { useSnackbar } from 'notistack';

const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { notification, setNotification } = useApp();

  if (notification != null) {
    enqueueSnackbar(notification.message, notification.options);
    setNotification(null);
  }
};

export default useNotification;
