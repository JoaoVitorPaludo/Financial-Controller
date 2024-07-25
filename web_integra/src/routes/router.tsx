import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import Dashboard from '../containers/dashboard/dashboard';
import Login from '../containers/login/login';
import { useAuth } from '../store/auth/auth';

const Router = () => {
  // Se está autenticado ou não no sistema
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {isAuthenticated ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />

              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
