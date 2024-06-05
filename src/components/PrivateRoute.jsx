import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
  // component - ContactsPage
  const { isLoggedIn, isRefreshing } = useAuth(); // isLoggedIn - true or false
  const shouldRedirect = !isLoggedIn && !isRefreshing; // component - RegisterPage or LoginPage

  return shouldRedirect ? (
    <Navigate to={redirectTo} />
  ) : (
    Component
  ); // if shouldRedirect is true, then redirect to redirectTo, else render Component
};