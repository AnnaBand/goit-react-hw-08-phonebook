import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #3a3a3a;
  &.active {
    color: whitesmoke;
    background-color: #3a3a3a;
  }
`;

export const AuthNav = () => {
  return (
    <div>
      <StyledLink className={css.linkReg} to='/register'>
        Register
      </StyledLink>
      <StyledLink className={css.linkLog} to='/login'>
        Login
      </StyledLink>
    </div>
  );
};