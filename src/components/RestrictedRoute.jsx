import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
  // component - RegisterPage or LoginPage
  const { isLoggedIn } = useAuth(); // component - RegisterPage or LoginPage

  return isLoggedIn ? (
    <Navigate to={redirectTo}></Navigate>
  ) : (
    Component
  ); // if isLoggedIn is true, then redirect to redirectTo, else render Component
};