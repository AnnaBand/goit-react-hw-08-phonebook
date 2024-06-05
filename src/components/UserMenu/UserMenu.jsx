import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#ed8080',
    '&:hover': {
      backgroundColor: '#ed8080',
      boxShadow: '2px 6px 6px rgba(0, 0, 0, 0.4)',
    },
  }));

  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>Welcome, {user.name}!</p>
      <ColorButton
        className={css.userBtn}
        type='submit'
        variant='contained'
        size='small'
        onClick={() => dispatch(logOut())}>
        Log Out
      </ColorButton>
    </div>
  );
};