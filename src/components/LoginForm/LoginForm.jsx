import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from '../LoginForm/LoginForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const [showPassword, setShowPassword] =
    React.useState(false);

  const handleClickShowPassword = () =>
    setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#b74848',
    '&:hover': {
      backgroundColor: '#b74848',
      boxShadow: '2px 6px 6px rgba(0, 0, 0, 0.4)',
    },
  }));

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit}
      autoComplete='off'>
      <div>
        <p className={css.label}>Email</p>
        <TextField
          id='input-with-icon-textfield'
          label='User Email'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant='outlined'
          name='email'
        />
      </div>
      <div>
        <p className={css.label}>Password</p>
        <OutlinedInput
          name='password'
          id='outlined-adornment-password'
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'>
                {showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <div className={css.loginBtn}>
        <ColorButton
          type='submit'
          variant='contained'
          size='large'>
          Log In
        </ColorButton>
      </div>
    </form>
  );
};