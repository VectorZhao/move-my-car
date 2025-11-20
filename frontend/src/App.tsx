import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PublicVehiclePage from './pages/PublicVehiclePage';
import { useAuth } from './context/AuthContext';
import { Role } from './types';

const ProtectedRoute: React.FC<{ children: JSX.Element; role?: Role }> = ({ children, role }) => {
  const { isAuthenticated, user, initialized, logout } = useAuth();
  const location = useLocation();

  if (!initialized) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (role && user?.role !== role) {
    logout();
    return <Navigate to="/login" replace state={{ from: location, message: '请使用管理员账号登录' }} />;
  }

  return children;
};

const HomeRedirect = () => {
  const { user, initialized } = useAuth();
  if (!initialized) return null;
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={user.role === 'ADMIN' ? '/admin' : '/dashboard'} replace />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Navigate to="/login" replace />} />
      <Route path="/vehicle/:shareCode" element={<PublicVehiclePage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
