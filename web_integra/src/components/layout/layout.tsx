import { Grid, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import useNotification from '../../hooks/useNotification';
import { useApp } from '../../store/app/app';
import { Loading } from '../loading/loading';

const Layout = () => {
  const { palette } = useTheme();
  const { isLoading } = useApp();

  useNotification();
  return (
    <>
      {isLoading && <Loading />}
      <Grid container height="100vh" overflow="auto" bgcolor={palette.background.default}>
        <Outlet />
      </Grid>
    </>
  );
};

export { Layout };
