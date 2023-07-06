import React from 'react';

const ContactForm = ({ name, handleChangeName, handleSubmit }) => {
  const handleFormSubmit = e => {
    e.preventDefault();
    handleSubmit(name);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name
        <input
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChangeName}
          value={name}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
