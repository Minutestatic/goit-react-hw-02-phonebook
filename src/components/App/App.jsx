import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = name => {
    const { contacts } = this.state;

    const newContact = {
      id: nanoid(),
      name: name,
    };
    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm
            name={name}
            handleChangeName={this.handleChangeName}
            handleSubmit={this.handleSubmit}
          />
        </Section>
        <Section title={'Contacts'}>
          <ContactList contacts={contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
