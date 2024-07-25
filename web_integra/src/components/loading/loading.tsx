import { CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgba(0, 0, 0, 0.5)',

        zIndex: 9999,
        position: 'absolute',
        inset: 0,
      }}
    >
      <CircularProgress />
    </div>
  );
};

export { Loading };
