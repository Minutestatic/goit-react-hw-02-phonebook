import React from 'react';

import css from './ContactList.module.css';
const ContactList = ({ contacts, deleteContact }) => {
  const handleDelete = id => {
    deleteContact(id);
  };

  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => (
        <li className={css['contact-list-item']} key={contact.id}>
          {contact.name}: {contact.number}
          <div>
            <button
              className={css['contact-list-button']}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
