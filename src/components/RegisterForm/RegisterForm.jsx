import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const password = form.elements.password.value;

    if (password.length < 7) {
      setError('Password must be at least 7 characters long');
      return;
    }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: password,
      })
    );
    form.reset();
    setError('');
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
      <div className={css.registerInput}>
        <p className={css.label}>Username</p>
        <TextField
          className={css.inputReg}
          label='Name'
          name='name'
          type='name'
        />
      </div>
      <div className={css.registerInput}>
        <p className={css.label}>Email</p>
        <TextField
          className={css.inputReg}
          label='Email'
          name='email'
          type='email'
        />
      </div>
      <div className={css.registerInput}>
        <p className={css.label}>Password (min. 7 characters)</p>
        <TextField
          className={css.inputReg}
          label='Password'
          name='password'
          type='password'
        />
      </div>
      {error && <p className={css.error}>{error}</p>}
      <div className={css.loginBtn}>
        <ColorButton
          type='submit'
          variant='contained'
          size='large'>
          Register
        </ColorButton>
      </div>
    </form>
  );
};