import propTypes from 'prop-types';
import css from './ContactList.module.css';
import { EditContacts } from '../EditContacts/EditContacts';

export const ContactList = ({
  contacts,
  handleDelete,
  handleEdit,
  handleModalOpen,
  closeModal,
  isEditModalOpen,
  editId,
}) => {
  const getEditContact = () => {
    return contacts.find(contact => contact.id === editId);
  };

  return (
    <div>
      {' '}
      <ul className={css.contactList}>
        {' '}
        {contacts &&
          contacts.map((contact, id) => (
            <li key={id} className={css.contactListItem}>
              {contact.name}: {contact.number}
              <button
                className={css.contactListBtn}
                type='button'
                name='edit'
                onClick={() => handleModalOpen(contact.id)}>
                Edit
              </button>
              <button
                type='button'
                className={css.contactListBtn}
                onClick={() => handleDelete(contact.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
      {isEditModalOpen && (
        <EditContacts
          id={editId}
          editContact={getEditContact()}
          closeModal={closeModal}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
      editId: propTypes.string,
    })
  ),
  handleDelete: propTypes.func,
  handleEdit: propTypes.func,
  handleModalOpen: propTypes.func,
  closeModal: propTypes.func,
  isEditModalOpen: propTypes.bool,
};