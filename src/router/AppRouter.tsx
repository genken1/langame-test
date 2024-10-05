import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from '@/pages/Main';
import { LoginPage } from '@/pages/Login';
import { RegisterPage } from '@/pages/Register';
import { PrivateRoute } from '@/router/PrivateRoute.tsx';

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PrivateRoute>
          <MainPage />
        </PrivateRoute>
      ),
    },
    {
      path: '/login',
      element: (
        <LoginPage />
      ),
    },
    {
      path: '/register',
      element: (
        <RegisterPage />
      ),
    }
  ])

  return <RouterProvider router={router} />
}
