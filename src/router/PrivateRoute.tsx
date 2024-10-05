import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/providers';
import { ChildrenProp } from '@/types';

export const PrivateRoute: FC<ChildrenProp> = ({ children }) => {
  const { authenticated } = useAuthContext()

  if (authenticated) {
    return children;
  }

  return <Navigate to="/login" />;
};
