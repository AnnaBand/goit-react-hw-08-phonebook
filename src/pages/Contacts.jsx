import { useEffect, useState } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import {
  fetchContacts,
  deleteContact,
  editContact,
} from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilters,
} from '../redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilters);
  const [isEditModalOpen, setIsEditModalOpen] =
    useState(false);
  const [editId, setEditId] = useState('');

  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleEdit = contact => {
    dispatch(editContact(contact));
    closeModal();
  };

  const handleModalOpen = e => {
    setIsEditModalOpen(true);
    setEditId(e);
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  const getFilteredContacts = () => {
    const filteredContactList =
      contacts &&
      contacts.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(filter.toLowerCase());
      });
    return filteredContactList;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        margin: 20,
        borderRadius: 10,
        paddingBottom: 30,
      }}>
      <h1>Create New Contact</h1>
      <ContactForm />
      <h1>Your Contacts</h1>
      <Filter />
      <ContactList
        contacts={getFilteredContacts()}
        handleEdit={handleEdit}
        closeModal={closeModal}
        handleDelete={handleDelete}
        handleModalOpen={handleModalOpen}
        isEditModalOpen={isEditModalOpen}
        editId={editId}
      />
    </div>
  );
};

export default Contacts;