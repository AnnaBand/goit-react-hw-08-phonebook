import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { Notify } from 'notiflix';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  const handleNameChange = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleNumberChange = e => {
    setPhone(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const contactList = [...contacts];
    if (
      contactList.findIndex(
        contact => name === contact.name
      ) !== -1
    ) {
      Notify.warning('Contact already exists!', {
        position: 'left-top',
      });
    } else {
      dispatch(
        addContact({
          name,
          number: phone,
        })
      );
    }

    setName('');
    setPhone('');
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
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>Name </label>
      <TextField
        className={css.formInput}
        type='text'
        name='name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder='Enter name'
        value={name}
        onChange={handleNameChange}
        id='filled-basic'
        label=''
        variant='filled'
      />
      <label className={css.formLabel}>Number </label>
      <TextField
        className={css.formInput}
        type='tel'
        name='number'
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        required
        placeholder='Enter phone number'
        value={phone}
        onChange={handleNumberChange}
        id='filled-basic'
        label=''
        variant='filled'
      />
      <ColorButton
        className={css.formBtn}
        type='submit'
        variant='contained'
        size='large'>
        Add Contact
      </ColorButton>
    </form>
  );
};