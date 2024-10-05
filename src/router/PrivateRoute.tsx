import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/providers';

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { authenticated } = useAuthContext()

  if (authenticated) {
    return children;
  }

  return <Navigate to="/login" />;
};
