import React from 'react';
import { ContactForm } from './contactForm/ContactForm'
import { Section } from './section/Section';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts);

  const checkName = (name) => {
    return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  };


  return (
    <>
      <Section title='Phonebook'>
        <ContactForm
          checkName={checkName}
        />
      </Section>
      <Section title='Contacts'>
        <Filter />
        <ContactList/>
      </Section>
    </>
  );
}

export default App;
