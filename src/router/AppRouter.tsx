import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from '@/pages/Main';
import { LoginPage } from '@/pages/Login';
import { RegisterPage } from '@/pages/Register';
import { PrivateRoute } from '@/router/PrivateRoute.tsx';
import { Suspense } from 'react';

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback='Loading...'>
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        </Suspense>
      ),
    },
    {
      path: '/login',
      element: (
        <Suspense fallback='Loading...'>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: '/register',
      element: (
        <Suspense fallback='Loading...'>
          <RegisterPage />
        </Suspense>
      ),
    }
  ])

  return <RouterProvider router={router} />
}
