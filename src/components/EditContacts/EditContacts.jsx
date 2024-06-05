import propTypes from 'prop-types';
import css from '../EditContacts/EditContacts.module.css';
import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const EditContacts = ({
  handleEdit,
  id,
  editContact,
}) => {
  const [editName, setEditName] = useState('');
  const [editPhone, setEditPhone] = useState('');

  useEffect(() => {
    if (editContact) {
      setEditName(editContact.name);
      setEditPhone(editContact.number);
    }
  }, [editContact]);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: editName,
      number: editPhone,
      id: id,
    };
    handleEdit(contact);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: '#b74848',
    '&:hover': {
      backgroundColor: '#b74848',
      boxShadow: '2px 6px 6px rgba(0, 0, 0, 0.4)',
    },
  }));

  return (
    <div>
      <Paper elevation={5}>
        <div className={css.modal}>
          <form
            className={css.modalForm}
            onSubmit={handleSubmit}>
            <label name='name'>
              <TextField
                className={css.editInput}
                defaultValue={editContact.name}
                onChange={e =>
                  setEditName(e.currentTarget.value)
                }
                id='outlined-basic'
                label=''
                variant='outlined'
                size='small'
              />
            </label>
            <label name='phone'>
              <TextField
                className={css.editInput}
                defaultValue={editContact.number}
                onChange={e =>
                  setEditPhone(e.currentTarget.value)
                }
                id='outlined-basic'
                label=''
                variant='outlined'
                size='small'
              />
            </label>
            <ColorButton
              className={css.editBtn}
              type='submit'
              variant='contained'
              size='small'>
              Confirm
            </ColorButton>
          </form>
        </div>
      </Paper>
    </div>
  );
};

EditContacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleEdit: propTypes.func,
  editContact: propTypes.object,
};