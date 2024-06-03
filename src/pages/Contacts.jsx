import React, { useEffect, useState } from 'react';
import { fetchContacts } from '../services/api';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const token = localStorage.getItem('token');
        const data = await fetchContacts(token);
        setContacts(data);
      } catch (error) {
        alert('Failed to fetch contacts!');
      }
    };

    loadContacts();
  }, []);

  return (
    <div className="container">
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}: {contact.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;