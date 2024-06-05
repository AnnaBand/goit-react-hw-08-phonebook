import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  console.log('App component rendered'); // Dodanie console.log

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path='/register'
            element={
              <RestrictedRoute
                redirectTo='/contacts'
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path='/login'
            element={
              <RestrictedRoute
                redirectTo='/contacts'
                component={<LoginPage />}
              />
            }
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoute
                redirectTo='/login'
                component={<Contacts />}
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
